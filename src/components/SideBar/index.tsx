import * as React from 'react';
import MyTypes from 'MyTypes';
import { connect } from 'react-redux';
import { toggle as toggleAction } from '@/redux/actions/sidebar';

// type Props = {
//   collapsed: boolean;
//   toggle: MyTypes.RootAction;
// }
const mapStateToProps = (state: MyTypes.RootState) => ({
  collapsed: state.sidebar.collapsed
});

const mapDispatchToProps = {
  toggle: toggleAction
};

type Props = ReturnType<typeof mapStateToProps>;

class SideBar extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: props.collapsed
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    console.log('state', this.state);
    console.log('props', this.props);
  }

  handleToggle() {
    this.props.toggle();
    console.log('toggle ...');
  }

  render() {
    const {
      collapsed,
    } = this.state;
    console.log('collapsed', collapsed);

    return (
      <div>
        <p>Side Bar</p>
        <button className="button is-primary" onClick={this.handleToggle}>
          Primary button
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);