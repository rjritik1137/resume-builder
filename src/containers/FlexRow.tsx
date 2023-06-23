import { ReactFCWithChildren } from 'local-react'

import React from 'react'

const FlexRow: ReactFCWithChildren<NonNullable<unknown>> = ({
  children,
  p,
}) => {
  return (
    <div
    //   className={`${styles.headersTypeContainer} ${styles.experienceHeader}`}
    >
      {children}
    </div>
  )
}

export default FlexRow
