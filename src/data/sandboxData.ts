export interface SandboxDataset {
  id: string;
  name: string;
  description: string;
  dataPoints: {
    category: string;
    sales: number;
    profit: number;
    orders: number;
    sentimentScore: number;
  }[];
}

export const SANDBOX_DATA: SandboxDataset[] = [
  {
    id: "ecommerce",
    name: "E-Commerce Category Metrics",
    description: "Sample aggregated performance across major retail product lines",
    dataPoints: [
      { category: "Technology", sales: 83615, profit: 14539, orders: 1840, sentimentScore: 88 },
      { category: "Office Supplies", sales: 71904, profit: 12249, orders: 3750, sentimentScore: 84 },
      { category: "Furniture", sales: 74200, profit: 1845, orders: 2120, sentimentScore: 71 },
      { category: "Apparel", sales: 45200, profit: 8920, orders: 2950, sentimentScore: 92 },
      { category: "Books & Media", sales: 31400, profit: 6410, orders: 1680, sentimentScore: 86 }
    ]
  },
  {
    id: "regions",
    name: "Regional Sales Performance",
    description: "Aggregated regional revenue and operating profit contribution",
    dataPoints: [
      { category: "West Region", sales: 72545, profit: 10840, orders: 3200, sentimentScore: 89 },
      { category: "East Region", sales: 67880, profit: 9150, orders: 2840, sentimentScore: 85 },
      { category: "Central Region", sales: 50120, profit: 3390, orders: 2320, sentimentScore: 78 },
      { category: "South Region", sales: 39140, profit: 4670, orders: 1620, sentimentScore: 82 }
    ]
  }
];

export interface SqlQueryExample {
  id: string;
  label: string;
  concept: string;
  query: string;
  explanation: string;
  resultHeaders: string[];
  resultRows: (string | number)[][];
}

export const SQL_EXAMPLES: SqlQueryExample[] = [
  {
    id: "groupby-agg",
    label: "GROUP BY & SUM",
    concept: "Aggregation",
    query: `SELECT 
    category,
    COUNT(order_id) AS total_orders,
    SUM(sales) AS total_revenue,
    ROUND(AVG(profit_margin), 2) AS avg_margin_pct
FROM transactions
GROUP BY category
ORDER BY total_revenue DESC;`,
    explanation: "Groups transaction records by product category to calculate total volume, total revenue, and average profit margin.",
    resultHeaders: ["category", "total_orders", "total_revenue", "avg_margin_pct"],
    resultRows: [
      ["Technology", 1840, "$83,615", "17.38%"],
      ["Furniture", 2120, "$74,200", "2.49%"],
      ["Office Supplies", 3750, "$71,904", "17.03%"],
      ["Apparel", 2950, "$45,200", "19.73%"],
      ["Books & Media", 1680, "$31,400", "20.41%"]
    ]
  },
  {
    id: "where-filter",
    label: "WHERE & FILTERING",
    concept: "Filtering",
    query: `SELECT 
    order_id,
    customer_segment,
    sales,
    discount,
    profit
FROM transactions
WHERE discount > 0.20 AND profit < 0
ORDER BY profit ASC
LIMIT 4;`,
    explanation: "Identifies loss-making transactions where discount threshold exceeded 20%, isolating margin leakage.",
    resultHeaders: ["order_id", "customer_segment", "sales", "discount", "profit"],
    resultRows: [
      ["ORD-9481", "Consumer", "$489.90", "40%", "-$124.50"],
      ["ORD-3312", "Corporate", "$320.00", "30%", "-$82.10"],
      ["ORD-7729", "Consumer", "$610.50", "35%", "-$64.80"],
      ["ORD-1204", "Home Office", "$195.00", "25%", "-$31.20"]
    ]
  },
  {
    id: "joins-relation",
    label: "INNER JOIN",
    concept: "Relational Querying",
    query: `SELECT 
    c.customer_name,
    c.region,
    COUNT(o.order_id) AS order_count,
    SUM(o.sales) AS total_spend
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_name, c.region
ORDER BY total_spend DESC
LIMIT 4;`,
    explanation: "Combines customer demographic records with order transactions to calculate customer lifetime spend.",
    resultHeaders: ["customer_name", "region", "order_count", "total_spend"],
    resultRows: [
      ["Priya Sharma", "West", 12, "$4,820"],
      ["Rahul Verma", "East", 9, "$3,940"],
      ["Ananya Singh", "Central", 11, "$3,610"],
      ["Amit Patel", "West", 8, "$3,150"]
    ]
  },
  {
    id: "subquery",
    label: "SUBQUERY (Nested)",
    concept: "Subqueries",
    query: `SELECT 
    category,
    sales,
    profit
FROM transactions
WHERE sales > (
    SELECT AVG(sales) 
    FROM transactions
)
ORDER BY sales DESC
LIMIT 4;`,
    explanation: "Employs a nested scalar subquery to isolate high-value orders performing above the portfolio mean.",
    resultHeaders: ["category", "sales", "profit", "vs_benchmark"],
    resultRows: [
      ["Technology", "$1,450.00", "$320.00", "+184% Above Avg"],
      ["Furniture", "$1,220.00", "$95.00", "+139% Above Avg"],
      ["Technology", "$980.00", "$210.00", "+92% Above Avg"],
      ["Office Supplies", "$850.00", "$180.00", "+66% Above Avg"]
    ]
  }
];
