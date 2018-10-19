import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';

export default class Template extends React.Component {
    static propTypes = {
        children: PropTypes.func,
    };

    render() {
        return (
            <React.Fragment>
                <Helmet
                    title="Sean McPherson"
                    meta={[
                        { name: 'description', content: 'Sean McPherson' },
                        { name: 'keywords', content: 'Sean McPherson, Sean, McPherson' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <header>
                    <div className="responder">
                        <h1>
                            <Link
                                to="/"
                            >
                                Gatsby Blog
                            </Link>
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="responder">
                        {this.props.children}
                    </div>
                </main>
                <footer>© Sean McPherson | (SDG)</footer>
            </React.Fragment>
        );
    }
}
