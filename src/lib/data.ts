export const sentimentTrend = [
  { day: "Mon", sat: 70, nps: 54 },
  { day: "Tue", sat: 72, nps: 56 },
  { day: "Wed", sat: 75, nps: 58 },
  { day: "Thu", sat: 73, nps: 60 },
  { day: "Fri", sat: 76, nps: 63 },
  { day: "Sat", sat: 77, nps: 65 },
  { day: "Sun", sat: 78, nps: 67 },
];

export const sentimentBreakdown = [
  { name: "Positive", value: 62, color: "#7EC48A" },
  { name: "Neutral", value: 23, color: "#7AAFD4" },
  { name: "Negative", value: 15, color: "#E8907A" },
];

export const channels = [
  { name: "Web", score: 84 },
  { name: "Email", score: 79 },
  { name: "Mobile", score: 71 },
  { name: "Chat", score: 68 },
  { name: "Social", score: 61 },
];

export const atRisk = [
  { id: "ahmed-raza", name: "Ahmed Raza", risk: 82, last: "2 days ago" },
  { id: "sara-malik", name: "Sara Malik", risk: 74, last: "1 day ago" },
  { id: "zain-ali", name: "Zain Ali", risk: 69, last: "3 days ago" },
];

export const leaderboard = [
  { name: "Ahmed Raza", score: 82 },
  { name: "Fatima Khan", score: 77 },
  { name: "Ayesha Noor", score: 71 },
  { name: "Sara Malik", score: 61 },
  { name: "Omar Siddiqui", score: 43 },
];

export const loyaltyTrend = Array.from({ length: 14 }).map((_, i) => ({
  day: `D${i + 1}`,
  score: 58 + Math.round(Math.sin(i / 2) * 6 + i * 0.6),
}));

export const surveys = [
  { id: "csat", name: "Customer Satisfaction Survey", rate: 68, sent: "Oct 26", color: "#7AAFD4" },
  { id: "post", name: "Post Purchase Feedback", rate: 45, sent: "Oct 20", color: "#A78BD4" },
  { id: "support", name: "Support Experience Survey", rate: 82, sent: "Oct 15", color: "#7EC48A" },
];

export const alerts = [
  { id: "ahmed-raza", name: "Ahmed Raza", tag: "High Risk", tagColor: "#E8907A", border: "#E8907A", msg: "Sentiment dropped sharply over the last 3 interactions.", time: "10 min ago", priority: "high" },
  { id: "sara-malik", name: "Sara Malik", tag: "Follow-up", tagColor: "#D4B870", border: "#D4B870", msg: "Awaiting response after support escalation last week.", time: "1 hour ago", priority: "med" },
  { id: "zain-ali", name: "Zain Ali", tag: "Churn Risk", tagColor: "#E8907A", border: "#E8907A", msg: "Cancelled subscription preview — needs immediate outreach.", time: "3 hours ago", priority: "high" },
  { id: "omar-siddiqui", name: "Omar Siddiqui", tag: "Low NPS", tagColor: "#7AAFD4", border: "#7AAFD4", msg: "Detractor on latest NPS survey, mentioned pricing concerns.", time: "Today", priority: "low" },
  { id: "fatima-khan", name: "Fatima Khan", tag: "Follow-up", tagColor: "#D4B870", border: "#D4B870", msg: "Promised callback after onboarding session not yet completed.", time: "Yesterday", priority: "med" },
];

export const interactions = [
  { channel: "Email", date: "March 14", msg: "Product not working properly", sentiment: "Negative", color: "#7AAFD4" },
  { channel: "Live Chat", date: "March 15", msg: "Still not resolved, very frustrated", sentiment: "Negative", color: "#7EC48A" },
  { channel: "Social Media", date: "March 16", msg: "Terrible experience will not recommend", sentiment: "Negative", color: "#A78BD4" },
];

export const npsHistory = Array.from({ length: 7 }).map((_, i) => ({
  day: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i],
  nps: [54,57,59,62,64,66,67][i],
}));

export const responses = [
  { rating: 9, text: "Loved the experience, customer service was top-notch.", date: "Oct 27", name: "Hira S." },
  { rating: 7, text: "Decent product, but delivery was a little slow.", date: "Oct 27", name: "Bilal A." },
  { rating: 10, text: "Best support team I've worked with — very helpful.", date: "Oct 26", name: "Mariam K." },
  { rating: 4, text: "Pricing was unclear, had to ask twice.", date: "Oct 26", name: "Usman R." },
];

export const responseDist = [
  { rating: "1", count: 1 }, { rating: "2", count: 1 }, { rating: "3", count: 2 },
  { rating: "4", count: 3 }, { rating: "5", count: 4 }, { rating: "6", count: 6 },
  { rating: "7", count: 11 }, { rating: "8", count: 14 }, { rating: "9", count: 16 }, { rating: "10", count: 10 },
];
