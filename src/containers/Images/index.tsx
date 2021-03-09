import React from 'react';
import { connect } from 'react-redux';
import { History } from 'history';
import MyTypes from 'MyTypes';

const mapStateToProps = (_: MyTypes.RootState, props: { history: History }) => ({
  history: props.history,
});

type Props = ReturnType<typeof mapStateToProps>;

class Images extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="panel">
        <h2 className="panel-title m-b-md">图片资源列表</h2>
        <div>
          <table className="primary-table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>标签</th>
                <th>描述</th>
                <th>图片</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>simsim</td>
                <td>simsim</td>
                <td>simsim</td>
                <td>simsim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}

export default connect(mapStateToProps, null)(Images);
