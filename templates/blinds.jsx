import Adapt from 'core/js/adapt';
import React from 'react';
import { html, classes, compile, templates } from 'core/js/reactHelpers';

export default function Blinds(props) {
    const {
        _items
    } = props;

    return (
        <div className="blinds__inner component__inner">

            <templates.header {...props} />

            <div className="blinds__widget component__widget">
                <div className="blinds__container">
                    <div className="blinds-items">

                        {_items.map(({ title, body, _graphic, _isVisited, _classes }, _index) => (
                            <button
                                className={classes([
                                    'blinds-item',
                                    _isVisited && 'is-visited',
                                    _classes
                                ])}
                                style={{
                                    backgroundImage: `url(${_graphic._src})`
                                }}
                                aria-label={_graphic.ariaLabel}
                                key={_index}
                            >
                                <div className="blinds-item-overlay" aria-hidden="true"></div>
                                <div className="blinds-text is-hidden" data-index={_index}>
                                    {title && (
                                        <div className="blinds-item-title">
                                            {html(compile(title))}
                                        </div>
                                    )}
                                    {body && (
                                        <div className="blinds-item-body">
                                            {html(compile(body))}
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}