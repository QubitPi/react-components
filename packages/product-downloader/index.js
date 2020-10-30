import { useState, useMemo, useEffect } from 'react'

import DownloadCards from './partials/download-cards'
import ReleaseInformation from './partials/release-information'
import {
  sortPlatforms,
  sortAndFilterReleases,
  detectOs,
} from './utils/downloader'

import styles from './style.module.css'

export default function ProductDownloader({
  releases,
  productName,
  productId,
  brand,
  latestVersion,
  tutorialLink,
  merchandisingSlot,
  logo,
  getStartedLinks,
  getStartedDescription,
  containers,
  tutorials,
  packageManagers,
  changelog,
}) {
  const currentRelease = releases.versions[latestVersion]

  const sortedDownloads = useMemo(() => sortPlatforms(currentRelease), [
    currentRelease,
  ])
  const osKeys = Object.keys(sortedDownloads)
  const [osIndex, setSelectedOsIndex] = useState()

  // Sort our releases for our ReleaseInformation section
  const latestReleases = sortAndFilterReleases(Object.keys(releases.versions))
  const sortedReleases = latestReleases.map((releaseVersion) => ({
    ...sortPlatforms(releases.versions[releaseVersion]),
    version: releaseVersion,
  }))

  const tabData = Object.keys(sortedDownloads).map((osKey) => ({
    os: osKey,
    packageManagers: packageManagers.filter(
      (packageManager) => packageManager.os === osKey
    ),
  }))

  useEffect(() => {
    // if we're on the client side, detect the default platform only on initial render
    const index = osKeys.indexOf(detectOs(window.navigator.platform))
    setSelectedOsIndex(index)
  }, [])

  return (
    <div className={styles.root}>
      <h1>Download {productName}</h1>
      <DownloadCards
        brand={brand}
        defaultTabIdx={osIndex}
        tabData={tabData}
        downloads={sortedDownloads}
        version={latestVersion}
        logo={logo}
        tutorialLink={tutorialLink}
        merchandisingSlot={merchandisingSlot}
      />

      {
        <div className="g-container">
          <div className={styles.gettingStarted}>
            <h2>Getting Started</h2>
            <p>{getStartedDescription}</p>
            <div className={styles.links}>
              {getStartedLinks?.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      }

      <ReleaseInformation
        productId={productId}
        productName={productName}
        brand={brand}
        releases={sortedReleases}
        latestVersion={latestVersion}
        packageManagers={packageManagers}
        containers={containers}
        tutorials={tutorials}
        changelog={changelog}
      />
    </div>
  )
}