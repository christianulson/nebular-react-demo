import React from 'react';
import { ChartsPanel } from './charts-panel/ChartsPanel';
import { CountryOrders } from './country-orders/CountryOrders';
import { EarningCard } from './earning-card/EarningCard';
import { ProfitCard } from './profit-card/ProfitCard';
import { ProgressSection } from './progress-section/ProgressSection';
import { TrafficCard } from './trafffic-card/TrafficCard';
import { UserActivity } from './user-activity/UserActivity';
import { VisitorsAnalytics } from './visitors-analytics/VisitorsAnalytics';

export function ECommerce() {
  return (
    <>
      <div className="row">
        <div className="col-xxl-5">
          <div className="row">
            <div className="col-md-6">
              <ProfitCard />
            </div>
            <div className="col-md-6">
              <EarningCard />
            </div>
          </div>
          <TrafficCard />
        </div>

        <div className="col-xxl-7">
          <ChartsPanel />
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-9">
          <CountryOrders />
        </div>
        <div className="col-xxl-3">
          <ProgressSection />
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-9">
          <VisitorsAnalytics />
        </div>
        <div className="col-xxl-3">
          <UserActivity />
        </div>
      </div>
    </>
  );
}
