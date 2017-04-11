import React , {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Profile extends Component {
    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.userData.login}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={this.props.userData.avatar_url} className='thumbnail' style={{width :"100%"}} />
                            </div>
                            
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                    <h2>
                                        <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                                        <span className="label label-success">{this.props.userData.public_gists} Gists</span>
                                        <span className="label label-info">{this.props.userData.followers} Followers</span> 
                                        <span className="label label-warning">{this.props.userData.following} Following</span>
                                    </h2>
                                    </div>
                                 </div>
                                 <hr/>
                                 <br/>
                                 <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item">Name: {this.props.userData.login}</li>
                                            <li className="list-group-item">Github Url: {this.props.userData.html_url}</li>
                                            <li className="list-group-item">Location: {this.props.userData.location}</li>
                                            <li className="list-group-item">Updated Time: {this.props.userData.updated_at}</li>
                                        </ul>
                                    </div>
                                </div>

                                
                                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Redirect</a>
                                
                            </div>
                            
                                
                           
                        </div>

                        
                    </div>
                </div>
            </div>

        )

    }

}