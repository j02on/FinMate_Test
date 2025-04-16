import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import { LineChart, Wallet, PieChart } from 'lucide-react';
import { backimg } from './assets';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #5531f7 0%, #3182f7 100%);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  opacity: 0.9;
  line-height: 1.5;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`;

function App() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', { page: 'home' });
    }
  }, []);

  return (
    <Container
      style={{ position: 'relative', overflow: 'hidden', width: '100vw' }}
    >
      <img
        src={backimg}
        alt="back"
        style={{
          position: 'absolute',
          top: -100,
          right: -400,
          width: '80%',
        }}
      />
      <Content>
        <Header>
          <Title>FinMate</Title>
          <Subtitle>
            AI가 분석해주는 소비 리포트, 한 달만 써보면 돈이 어디로 새고 있는지
            확인할 수 있습니다
          </Subtitle>
        </Header>

        <Features>
          <FeatureCard>
            <IconWrapper>
              <LineChart size={32} />
            </IconWrapper>
            <h3>지출 분석</h3>
            <p>AI가 당신의 소비 패턴을 분석하여 맞춤형 인사이트를 제공합니다</p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <Wallet size={32} />
            </IconWrapper>
            <h3>예산 관리</h3>
            <p>효율적인 예산 설정과 관리로 재정 목표를 달성하세요</p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <PieChart size={32} />
            </IconWrapper>
            <h3>카테고리별 분석</h3>
            <p>지출을 카테고리별로 분류하여 한눈에 파악할 수 있습니다</p>
          </FeatureCard>
        </Features>
      </Content>
    </Container>
  );
}

export default App;
