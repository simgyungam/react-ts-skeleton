import * as React from 'react';
import MyTypes from 'MyTypes';
import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import { toggle as toggleAction } from '@/redux/actions/sidebar';
import Button from '@material-ui/core/Button';

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

type States = ReturnType<typeof mapStateToProps>;
// type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type Props = States & {
  toggle: any;
};

class SideBar extends React.Component<Props, States> {
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { collapsed } = nextProps;
    console.log('receive collapsed', collapsed);
  }

  handleToggle() {
    // this.props.toggle();
    console.log('toggle ...', this.props.toggle());
  }

  render() {
    const {
      collapsed,
    } = this.state;
    console.log('collapsed', collapsed);

    return (
      <div>
        <p>This is Side Bar</p>
        <Button variant="contained" color="primary" onClick={this.handleToggle}>
          Primary button
        </Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);