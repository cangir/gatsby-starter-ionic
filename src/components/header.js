import PropTypes from "prop-types"
import React from "react"
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'

const Header = ({ siteTitle }) => (
  <IonHeader>
    <a className="skip-link" href="#content">Skip to main content</a>
    <IonToolbar>
      <IonTitle>
        {siteTitle}
      </IonTitle>
    </IonToolbar>
  </IonHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
