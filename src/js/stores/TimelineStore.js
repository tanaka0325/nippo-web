import alt from '../alt';
import TimelineActions from '../actions/TimelineActions';

class TimelineStore {
  constructor() {
    this.bindListeners({
      updateTimeline: TimelineActions.updateTimeline,
    });

    this.timeline = [];
  }

  updateTimeline(timeline) {
    this.timeline = timeline;
  }
}

module.exports = alt.createStore(TimelineStore);
