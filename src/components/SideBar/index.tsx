import * as React from 'react';
import MyTypes from 'MyTypes';
import { connect } from 'react-redux';
import { toggle as toggleAction } from '@/redux/actions/sidebar';

type Props = {
  collapsed: boolean;
}

class SideBar extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: props.collapsed
    }
  }

  componentDidMount() {
    console.log('state', this.state);
    console.log('props', this.props);
  }

  render() {
    return (
      <div>Side Bar</div>
    );
  }
}

const mapStateToProps = (state: MyTypes.RootState) => ({
  collapsed: state.sidebar.collapsed
});

const mapDispatchTpProps = {
  toggle: toggleAction
};

export default connect(mapStateToProps, mapDispatchTpProps)(SideBar);