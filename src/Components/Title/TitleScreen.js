import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './TitleScreen.css';

import  * as routes from '../../Routes/routes';

class TitleScreen extends Component {
    constructor(props){
		super(props);

		this.state = {
			redirect: false
		}
	}
	componentDidMount() {
		window.scrollTo(0, 0);
        // this.props.check();
		setInterval(() => {
			this.setState({redirect: true});
		}, 1700);
    }
    render() {
        const { redirect } = this.state;
        return (
            <div>
                <div className="title">
                    <div className="title-move-left no-pad">Nub</div>
                    <div className="title-flip-down no-pad">p</div>
                    <div className="title-move-down no-pad">ing</div>
                </div>
                {!!redirect && <DelayedRedirect />}
            </div>
        );
    }
}

const DelayedRedirect = withRouter(({ history }) => (
	<React.Fragment>
		{ history.push(routes.Login) }
	</React.Fragment>
  ))

export default TitleScreen;