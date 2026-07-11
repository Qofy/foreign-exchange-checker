import React from 'react';
import './FXChecker.css';
import { Header } from '@/components/Header';
import { LiveMarketTicker } from '@/components/LiveMarketTicker';
import { Converter } from '@/components/Converter';
import ConverterWrapper from '../converterWrapper/ConverterWrapper';

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
        {/* <Converter {...({} as any)} /> */}

        {/* Tabs Section */}
        <section className="tabs-section">
            <ConverterWrapper/>
          {/* </div> */}
        </section>
      </main>
    </div>
  );
};

export default FXChecker;
