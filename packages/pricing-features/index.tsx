import Table from './components/table'
import Tabs from './components/tabs'
import DownloadBlock from './components/download-block'
import { PricingFeaturesProps } from './types'
import { normalizeTableData } from './helpers'
import s from './style.module.css'

export default function PricingFeatures({
  features,
  download,
}: PricingFeaturesProps) {
  return (
    <section className={s.features}>
      {features.map(({ heading, footnote, content }, idx) => (
        <div className={s.content} key={heading || `features-${idx}`}>
          {heading && <h2 className={s.heading}>{heading}</h2>}
          {'tabs' in content ? (
            <Tabs
              tabs={content.tabs.map((tab) => ({
                label: tab.label,
                content: <Table {...tab.content} />,
              }))}
            />
          ) : (
            <Table {...content} />
          )}
          {footnote && (
            <div
              className={s.footnote}
              dangerouslySetInnerHTML={{ __html: footnote }}
            />
          )}
        </div>
      ))}
      <div className={s.download}>
        <DownloadBlock {...download} />
      </div>
    </section>
  )
}

export { Table, Tabs, DownloadBlock, normalizeTableData }
