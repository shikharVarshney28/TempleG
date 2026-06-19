import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '../sanityClient'; // अपने पाथ के अनुसार बदलें

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // पूरी वेबसाइट का ग्लोबल डेटा स्टेट
  const [globalData, setGlobalData] = useState({
    darshan: null,
    events: [],
    gallery: [],
    donation: null, // यहाँ डोनेशन स्टेट जोड़ा गया है
    aboutInfo: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const masterQuery = `{
      "darshan": *[_type == "darshan"] | order(date desc)[0] {
        date,
        deities[] {
          deityName,
          blessing,
          image
        }
      },
      "events": *[_type == "event"] | order(eventDate asc) {
        _id,
        title,
        description,
        eventDate,
        image
      },
      "gallery": *[_type == "gallery"] | order(_createdAt desc) {
        _id,
        title,
        category,
        mediaList[] { 
          _type, 
          asset,
          "url": asset->url
        }
      },
      "donation": *[_type == "donation"][0] {
        title,
        upiId,
        accountName,
        bankName,
        accountNumber,
        ifscCode,
        branch,
        qrCode,
        "qrCodeUrl": qrCode.asset->url
      }
    }`;

    client.fetch(masterQuery)
      .then((data) => {
        setGlobalData({
          darshan: data.darshan || null,
          events: data.events || [],
          gallery: data.gallery || [],
          donation: data.donation || null, // स्टेट में डेटा सेट किया
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Global Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ ...globalData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);