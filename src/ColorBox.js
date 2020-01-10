import React from 'react';

export default class ColorBox extends React.Component {
	render() {
		return (
			<div className="color-box" style={{ opacity: this.props.opacity }}>
				{this.props.opacity >= 0.2 ? (
					<ColorBox opacity={this.props.opacity - 0.1} />
				) : null}
			</div>
		);

		// let newOpacity = this.props.opacity;
		// if (newOpacity >= 0.2) {
		// 	return (
		// 		<div className="color-box" style={{ opacity: newOpacity }}>
		// 			<ColorBox opacity={newOpacity - 0.1} />
		// 		</div>
		// 	);
		// } else {
		// 	return null;
		// }
	}
}
