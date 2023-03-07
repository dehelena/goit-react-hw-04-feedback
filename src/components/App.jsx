import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);

  };
  
  countPositiveFeedbackPercentage = () => {
    let percentage = this.state.good / (this.countTotalFeedback()) *100;
      if (!percentage) {
          return 0;
      }
      return Math.round(percentage);
  }

  render() {
    return (
      <div>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}> 
          {this.countTotalFeedback() !== 0 ? (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (<Notification message={'There is no feedback'}/>) }
        </Section>
      </div>
    );
  }
}

export default App;
