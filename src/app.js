import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import Home from './components/common/Home'
import Articles from './components/articles/Index'
import Unknown from './components/common/Unknown'
import ToolBar from './components/corp/ToolBar'
import Footer from './components/corp/Footer'
import ViewArticle from './components/articles/ViewArticle'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import CreateArticle from './components/articles/CreateArticle'
import EditArticle from './components/articles/EditArticle'
import SecureRoute from './components/common/SecureRoute'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<>
					<ToolBar />
					<Notifications />
					<Switch>
						<Route exact path='/' component={Home} />
						<SecureRoute path='/blog/:id/edit' component={EditArticle} />
						<SecureRoute path='/blog/create' component={CreateArticle} />
						<Route path='/blog/register' component={Register} />
						<Route path='/blog/login' component={Login} />
						<Route path='/blog/:id' component={ViewArticle} />
						<Route exact path='/blog' component={Articles} />
						<Route exact path='/*' component={Unknown} />
					</Switch>
					<Footer />
				</>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
