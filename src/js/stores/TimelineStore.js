import alt from '../alt';
import TimelineActions from '../actions/TimelineActions';

class TimelineStore {
  constructor() {
    this.bindListeners({
      updateTimeline: TimelineActions.updateTimeline,
      reverseTimeline: TimelineActions.reverseTimeline,
    });

    this.timeline = [];
  }

  updateTimeline(timeline) {
    this.timeline = timeline;
  }

  reverseTimeline() {
    this.timeline = this.timeline.reverse();
  }
}

module.exports = alt.createStore(TimelineStore);
