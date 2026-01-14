// schemas/donation.js
export default {
  name: 'donation',
  title: 'Donation Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Support the Divine'
    },
    {
      name: 'qrCode',
      title: 'UPI QR Code',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the temple UPI QR code image here.'
    },
    {
      name: 'upiId',
      title: 'UPI ID',
      type: 'string',
      description: 'e.g., temple@upi'
    },
    {
      name: 'accountName',
      title: 'Account Holder Name',
      type: 'string'
    },
    {
      name: 'bankName',
      title: 'Bank Name',
      type: 'string'
    },
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'string'
    },
    {
      name: 'ifscCode',
      title: 'IFSC Code',
      type: 'string'
    },
    {
      name: 'branch',
      title: 'Branch Name',
      type: 'string'
    }
  ]
}