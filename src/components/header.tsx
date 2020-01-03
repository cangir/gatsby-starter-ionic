import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonIcon } from '@ionic/react'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <IonHeader>
    <a className="skip-link" href="#content">Skip to main content</a>
    <IonToolbar role="navigation">
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonTitle>
        {siteTitle}
      </IonTitle>
      <IonButtons slot="end">
        <IonButton color="primary" onClick={() => navigate("/")}>
          <IonIcon name="home" />
          Home
        </IonButton>
        <IonButton color="primary" onClick={() => navigate("/blog")}>
          Blog
        </IonButton>
      </IonButtons>
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
