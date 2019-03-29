import React from 'react';
import { hierarchy, cluster } from 'd3-hierarchy';
import datas from './datas';
import './style.scss';

const width = 700;
const height = 500;
const diameter = 7;

function formatPath(d) {
  const averageY = (d.y + d.parent.y) / 2;
  return `M ${d.y}, ${d.x}
    C ${averageY}, ${d.x} ${averageY}, ${d.parent.x} ${d.parent.y}, ${d.parent.x}`;
}

class Dendrogram extends React.PureComponent {
  componentWillMount() {
    const root = this.init();
    this.datas = root.descendants();
  }
  init = () => {
    // 100 is the margin will have on the right side
    const clusterLayout = cluster().size([height, width - 120]);
    const root = hierarchy(datas, function (d) {
      return d.children;
    });
    clusterLayout(root);
    return root;
  }
  renderPaths = () => {
    return this.datas.slice(1).map((d, idx) => {
      return (
        <path
          className="link"
          d={formatPath(d)}
          key={`link_${idx}`}
        />
      )
    });
  }
  renderNodes = () => {
    return this.datas.map((d, idx) => {
      return (
        <g
          transform={`translate(${d.y}, ${d.x})`}
          key={`node_${idx}`}
          className="node"
        >
          <circle r={diameter} />
          <text dx={-diameter} dy="-2">{d.data.name}</text>
        </g>
      )
    });
  }
  renderSvg = () => {
    return (
      <svg width={width} height={height}>
        <g transform="translate(50, 0)">
          {this.renderPaths()}
          {this.renderNodes()}
        </g>
      </svg>
    )
  }
  render() {
    if (!this.datas) {
      return null;
    }
    return (
      <div className="Dendrogram">
        {this.renderSvg()}
      </div>
    )
  }
}

export default Dendrogram;