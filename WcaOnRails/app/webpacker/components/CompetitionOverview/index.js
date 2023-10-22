import React from 'react';

import I18n from '../../lib/i18n';
import { events, continents } from '../../lib/wca-data.js.erb';

function CompetitionOverview() {
  return (
    <div className="container">
      <h2>{I18n.t('competitions.index.title')}</h2>
      <form className="competition-select form-inline list" id="competition-query-form" acceptCharset="UTF-8">
        <div className="form-group">
          <label htmlFor="events">
            {` ${I18n.t('competitions.competition_form.events')} `}
            <button type="button" id="select-all-events" className="btn btn-primary btn-xs">{I18n.t('competitions.index.all_events')}</button>
            <button type="button" id="clear-all-events" className="btn btn-default btn-xs">{I18n.t('competitions.index.clear')}</button>
          </label>
          <div id="events">
            {Object.values(events.official).map((event) => (
              <React.Fragment key={event.id}>
                <span className="event-checkbox">
                  <label htmlFor={`checkbox-${event.id}`}>
                    <input type="checkbox" name="event_ids[]" id={`checkbox-${event.id}`} value={event.id} />
                    <i data-toggle="tooltip" data-placement="top" className={` cubing-icon icon event-${event.id}`} data-original-title={event.name} />
                  </label>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="region">{I18n.t('competitions.index.region')}</label>
          <select name="region" id="region" className="form-control">
            <option value="all">{I18n.t('common.all_regions')}</option>
            <optgroup label={I18n.t('common.continent')}>
              {Object.values(continents.real).map((continent) => (
                <option value={continent.id} key={continent.id}>{continent.name}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </form>
    </div>
  );
}

export default CompetitionOverview;
