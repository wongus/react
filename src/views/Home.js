import React, {Component} from 'react'

export default class Home extends Component {
    render() {

        return (
            <div class="container-fluid pr-5 pl-5 pt-2 h-100 text-center justify-content-center">
                <div className="card">
                    <p className='header-text'>
                        Welcome
                    </p>
                    <p className="header-paragraph mr-5 ml-5 mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse sit amet consectetur lacus,
                        et feugiat ante. Sed sit amet quam eu erat aliquet efficitur vel at lacus. Mauris et libero vel
                        mauris faucibus rhoncus. Sed vulputate pellentesque turpis ac finibus. Aliquam vulputate tellus
                        a mattis malesuada. Cras lobortis placerat dui, accumsan varius urna dictum eget. Sed mattis
                        mauris ut convallis maximus. Nunc accumsan non arcu vitae sollicitudin.</p>
                </div>
            </div>
        )
    }
}