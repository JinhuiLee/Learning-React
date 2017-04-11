import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import Repo from "./Repo.jsx"
export default class RepoList extends Component {
    render(){
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.userRepo.map((item)=>{
                        return <Repo
                                    repo = {item}
                                    key = {item.id}
                                    {...this.props}
                        />
                        })
                    }
                    
                </ul>
            </div>

        )

    }

}