import * as React from 'react';
import './simple-grid.css';

import RandomImage from './RandomImage';

export interface IProps {
  imageCount?: number;
}

export interface IState {
  imageCount: number;
}

class RandomGrid extends React.Component<IProps, IState> {
    constructor(props: IProps){
      super(props);
      
      const { imageCount = 4 } = props;
      this.state = { 
        imageCount
      };

      //
      this.pressMore = this.pressMore.bind(this);
    }

    // tslint:disable-next-line:no-console
    // console.log("Helo");

    public render() {
      const { imageCount } = this.state;
      const imageList = Array(imageCount).fill(0).map((obj, index) => (
        <div className="col-3" key={index}>
          <RandomImage />
        </div>
      ));

      return (
        <div className="container">
          {
            this.splitRows(imageList, 4).map((row, index) => 
              <div className="row" key={index}>
                {row}
              </div>
            )
          }
          <div className="row">
            <div className="col-12">
              <button onClick={this.pressMore} className="btn-more-images">More ...</button>
            </div>
          </div>
        </div>
      );
    }

    public pressMore(event: any) {
      this.addImages(8);
    }

    public addImages(count: number) {
      let { imageCount } = this.state;

      imageCount += count;

      if (imageCount <= 0) {
        throw new Error('Grid size too small');
      }

      this.setState({imageCount});
    }

    public splitRows(list: any[], rowlen: number) {
      //
      const rows = [];
      let i = 0;

      while (i < list.length) {
        rows.push(list.slice(i, i += rowlen));
      }

      return rows;
    }
  }

export default RandomGrid;