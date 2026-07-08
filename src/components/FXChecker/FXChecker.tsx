import React from 'react';
import './FXChecker.css';
import { Header } from '@/components/Header';
import { LiveMarketTicker } from '@/components/LiveMarketTicker';
import { Converter } from '@/components/Converter';
import { Tabs } from '@/components/Tabs';
import { ChartStats } from '@/components/ChartStats';
import { TimeRangeSelector } from '@/components/TimeRangeSelector';
import { ChartHeader } from '@/components/ChartHeader';
import { ChartSvg } from '@/components/ChartSvg';

const FXChecker: React.FC = () => {
  return (
    <div className="fx-checker">
      {/* Header */}
    <Header/>

      {/* Live Markets Ticker */}
     <LiveMarketTicker/>
      {/* Main Content */}
      <main className="main-content">
        {/* Converter Section */}
        <Converter/>

        {/* Tabs Section */}
        <section className="tabs-section">
        <Tabs/>

          {/* Tab Content - History */}
          <div className="tab-content active">
            {/* Chart Stats */}

            {/* Time Range Selector */}

            {/* Chart Container */}
            <div className="chart-container">
            <ChartStats/>
            <TimeRangeSelector/>
              <ChartHeader/>
              <ChartSvg/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FXChecker;
