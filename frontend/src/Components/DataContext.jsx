import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '../sanityClient'; // अपने पाथ के अनुसार बदलें

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // पूरी वेबसाइट का ग्लोबल डेटा स्टेट
  const [globalData, setGlobalData] = useState({
    darshan: null,
    events: { upcoming: [], past: [] },
    gallery: [],
    donation: null,
    aboutInfo: null,
    socials: null, // NEW: सोशल लिंक्स के लिए स्टेट जोड़ा गया
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const masterQuery = `{
      "socials": *[_type == "socials"][0] {
        instagram,
        facebook,
        whatsapp
      },
      "darshan": *[_type == "darshan"] | order(date desc)[0] {
        date,
        deities[] {
          deityName,
          blessing,
          image
        }
      },
      "events": {
        "upcoming": *[_type == "event" && (startTime >= now() || (startTime <= now() && endTime >= now()))] | order(startTime asc) {
          ..., "imgUrl": image.asset->url
        },
        "past": *[_type == "event" && endTime < now()] | order(endTime desc)[0...10] {
          ..., "imgUrl": image.asset->url
        }
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
          events: data.events || { upcoming: [], past: [] },
          gallery: data.gallery || [],
          donation: data.donation || null,
          socials: data.socials || null, // NEW: फ़ेच किए गए सोशल डेटा को सेट किया
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