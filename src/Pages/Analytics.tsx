import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShortenedUrls = async () => {
      try {
        const response = await axios.get(
          'https://api-ssl.bitly.com/v4/user/bitlinks',
          {
            headers: {
              Authorization: 'Bearer 0ea82b65323793d20f55c962146ccc699dba62dd'
            }
          }
        );
        const bitlinks = response.data.links.map((link: any) => link.id);
        const analyticsPromises = bitlinks.map(fetchAnalyticsForUrl);
        const analyticsData = await Promise.all(analyticsPromises);
        setAnalyticsData(analyticsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shortened URLs:', error);
        setLoading(false);
      }
    };

    fetchShortenedUrls();
  }, []);

  const fetchAnalyticsForUrl = async (url: string) => {
    try {
      const response = await axios.get(
        `https://api-ssl.bitly.com/v4/bitlinks/${url}/clicks`,
        {
          params: {
            unit: 'month',
            units: 1,
            unit_reference: '2006-01-02T15%3A04%3A05-0700'
          },
          headers: {
            Authorization: 'Bearer 0ea82b65323793d20f55c962146ccc699dba62dd'
          }
        }
      );
      return {
        url,
        clicksData: response.data.link_clicks
      };
    } catch (error) {
      console.error(`Error fetching analytics data for ${url}:`, error);
      return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Analytics Page</h1>
      {analyticsData.map((data, index) => (
        <div key={index}>
          <h2>Analytics for URL: {data.url}</h2>
          <ul>
            {data.clicksData.map((clickData: any, idx: number) => (
              <li key={idx}>
                Date: {clickData.date}, Clicks: {clickData.clicks}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
