import React from 'react';

import { CertificationWrapper, CertificateHeader, CertificationBackground, CornerText, CornerFlash } from './styled';
import { BaseLayout } from '../../components';

interface Props {
  match: {
    params: {
      someId: string;
    };
  };
}

export const Certification: React.FC<Props> = ({
  match: {
    params: { someId },
  },
}) => {
  return (
    <BaseLayout>
      <CertificationWrapper>
        <CertificateHeader style={{ whiteSpace: 'pre-wrap' }}>
          {`To be continued.. =)))
            id: ${someId}`}
        </CertificateHeader>
        <CertificationBackground />
        <CornerFlash>
          <CornerText>RECORD</CornerText>
        </CornerFlash>
      </CertificationWrapper>
    </BaseLayout>
  );
};
