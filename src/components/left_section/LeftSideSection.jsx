import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookSquare, faLinkedinIn, faYoutubeSquare, faYoutube, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
class LeftSideSection extends Component {
	state = {}
	render() {
		return (
			<>
				Left Section
				<div className="row m-0">
					<div className="col-12">
						<div className="d-none d-lg-block">
							<button type="button" class="btn btn-primary btn-lg ml-2 mb-2"><FontAwesomeIcon icon={faHome} /></button>
							<button type="button" class="btn btn-primary btn-lg ml-2 mb-2"><FontAwesomeIcon icon={faFacebookSquare} /></button>
							<button type="button" class="btn btn-primary btn-lg ml-2 mb-2"><FontAwesomeIcon icon={faLinkedinIn} /></button>
							<button type="button" class="btn btn-primary btn-lg ml-2 mb-2"><FontAwesomeIcon icon={faYoutube} /></button>
							<button type="button" class="btn btn-primary btn-lg ml-2 mb-2"><FontAwesomeIcon icon={faInstagram} /></button>
						</div>

					</div>
				</div>
			</>
		);
	}
}

export default LeftSideSection;