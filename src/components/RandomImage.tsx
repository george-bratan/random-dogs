import * as React from 'react';
import logo from '../logo.svg';

class RandomImage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      src: logo || 'logo.svg'
    };

    this.refresh()
      .then(url => this.setState({src: url}))
  }

  public refresh(): Promise<string> {
    return fetch('https://random.dog/woof.json')
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }

        return response.json();
      })
      .then(data => {
        const ext = data.url.split('.').pop();

        if (this.is_image( ext ) || this.is_video( ext )) {
          return data.url;
        }

        // try again
        return this.refresh();
      });
  }

  public render() {
    const ext = this.state.src ? this.state.src.split('.').pop() : '';

    if (this.is_video( ext )) {
      return (
        <video width="100%" controls={true} className="random video">
          <source src={this.state.src} />
        </video>
      );
    }
    
    return (
      <img src={this.state.src} width="100%"  className="random image"/>
    );
  }

  public is_image(ext: string) {
    const allowed = ['jpg', 'jpeg', 'gif', 'png'];
    return allowed.indexOf(ext.toLowerCase()) >= 0;
  }

  public is_video(ext: string) {
    const allowed = ["mp4"];
    return allowed.indexOf(ext.toLowerCase()) >= 0;
  }
}

export default RandomImage;