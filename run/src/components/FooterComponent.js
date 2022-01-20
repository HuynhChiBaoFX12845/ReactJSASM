import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-lg-6 col-md-6 align-self-center">
                    <h5>Our Address</h5>
                    <address>
		              VinHome Grand Park Quận 9<br />
		              Thành phố Hồ Chí Minh<br />
		              Việt Nam<br />
		              <i className="fa fa-phone fa-lg"></i> : 0825999871<br />
		              <i className="fa fa-envelope fa-lg"></i> : <a href="baohc110902@gmail.com"> baohc110902@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-log-6 col-md-6 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=100011720023694"><i className="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;