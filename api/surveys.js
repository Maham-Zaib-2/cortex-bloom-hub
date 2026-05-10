export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const surveys = [
    { id: 1, title: 'Customer Satisfaction Survey', sentDate: '2023-10-26', responseRate: 68, responses: 68, avgScore: 7.8 },
    { id: 2, title: 'Post Purchase Feedback', sentDate: '2023-10-20', responseRate: 45, responses: 45, avgScore: 6.4 },
    { id: 3, title: 'Support Experience Survey', sentDate: '2023-10-15', responseRate: 82, responses: 82, avgScore: 8.2 },
  ];

  res.status(200).json(surveys);
}
