export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const loyaltyData = [
    { id: 1, name: 'Ahmed Raza', score: 82, nps: 9, trend: 'up' },
    { id: 2, name: 'Fatima Khan', score: 77, nps: 8, trend: 'up' },
    { id: 3, name: 'Ayesha Noor', score: 71, nps: 7, trend: 'stable' },
    { id: 4, name: 'Sara Malik', score: 61, nps: 6, trend: 'down' },
    { id: 5, name: 'Omar Siddiqui', score: 43, nps: 4, trend: 'down' },
  ];

  const npsBreakdown = {
    promoters: 42,
    passives: 31,
    detractors: 27,
    overallNPS: 61
  };

  res.status(200).json({ loyaltyData, npsBreakdown });
}
