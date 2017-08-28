import { Component } from 'preact';
import { Result } from './result';

const SEARCH = '//api.github.com/search/repositories';

export class Root extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        fetch(`${SEARCH}?q=preact`)
            .then( r => r.json() )
            .then( json => {
                this.setState({
                    results: json && json.items || []
                });
            });
    }

    render(props, state) {
        return (
            <div>
                <h1>Get Going Preact Cli</h1>
                <div class="list">
                    { state.results.map( result => (
                        <Result result={result} />
                    )) }
                </div>
            </div>
        );
    }
}
