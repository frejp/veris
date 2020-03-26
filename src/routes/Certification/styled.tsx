import styled from "styled-components";

export const CertificationBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 720px;
  z-index: -20;
  background-image: url(https://res.cloudinary.com/verisart/image/upload/w_1024,h_768/s3/prod/images/partner-cert-logos/7740_d48c46c8_original.jpg);
  background-size: cover;
  opacity: 0.4;
  max-width: 994px;
  margin: auto;
`;

export const CertificationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 15px solid white;
  max-width: 994px;
  margin-top: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  min-height: 720px;
`;

export const CornerFlash = styled.div`
  position: absolute;
  top: 0px;
  left: 100%;
  transform: translate3d(-50%, -50%, 0px) rotate(45deg);
  transform-origin: center center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  background-color: rgb(200, 200, 200);
  flex-direction: column;
  height: 145px;
  width: 144px;
  padding: 7px;
`;

export const CornerText = styled.div`
  font-family: SimplonNorm-Bold, Helvetica, sans-serif;
  font-size: 8px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
`;

export const CertificateHeader = styled.div`
  background: white;
  flex-direction: row;
  min-height: 90px;
  margin: 40px 40px 30px;
  text-align: center;
  line-height: 90px;
  font-size: 20px;
`;