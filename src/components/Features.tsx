import { motion } from 'motion/react';
import { Zap, Shield, CreditCard, Smartphone, TrendingUp, Lock } from 'lucide-react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: '빠른 결제',
    description: '단 3초만에 결제를 완료할 수 있는 초고속 결제 시스템',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Shield,
    title: '안전한 보안',
    description: '은행급 보안 시스템과 생체인증으로 안전하게 보호',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: CreditCard,
    title: '다양한 결제수단',
    description: '신용카드, 계좌이체, 간편결제 등 모든 결제수단 지원',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: '모바일 최적화',
    description: '언제 어디서나 스마트폰으로 편리하게 결제',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: '실시간 분석',
    description: '결제 내역과 소비 패턴을 한눈에 확인',
    color: 'from-blue-600 to-purple-600'
  },
  {
    icon: Lock,
    title: '개인정보 보호',
    description: '철저한 암호화로 개인정보를 안전하게 관리',
    color: 'from-purple-600 to-blue-600'
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <h3 className="mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4"
          >
            주요 기능
          </motion.div>
          <h2 className="mb-4">
            왜 <span className="text-blue-600">PayEasy</span>를 선택해야 할까요?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            최고의 기술과 사용자 경험으로 안전하고 편리한 결제 서비스를 제공합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
