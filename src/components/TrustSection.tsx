import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CounterAnimation } from './CounterAnimation';

const trustFeatures = [
  {
    icon: Shield,
    title: '은행급 보안',
    description: '금융기관에서 사용하는 최고 수준의 보안 시스템 적용'
  },
  {
    icon: Lock,
    title: '256bit 암호화',
    description: '모든 거래 정보를 군사급 암호화 기술로 보호'
  },
  {
    icon: Eye,
    title: '실시간 모니터링',
    description: '24시간 365일 이상 거래 탐지 및 차단'
  },
  {
    icon: CheckCircle2,
    title: '금융위원회 인증',
    description: '금융당국의 엄격한 심사를 통과한 안전한 서비스'
  }
];

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-white">
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
            신뢰와 보안
          </motion.div>
          <h2 className="mb-4">
            <span className="text-blue-600">안전</span>이 최우선입니다
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            고객님의 소중한 자산과 정보를 보호하기 위해 최선을 다합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBsb2NrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1OTkyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl"></div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="text-center"
          >
            <div className="mb-2">
              <CounterAnimation end={0} suffix="건" duration={1500} />
            </div>
            <div className="text-blue-200">보안 사고</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="text-center"
          >
            <div className="mb-2">
              <CounterAnimation end={99.99} suffix="%" decimals={2} duration={2000} />
            </div>
            <div className="text-blue-200">서비스 가동률</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="text-center"
          >
            <div className="mb-2">
              <CounterAnimation end={24} suffix="/7" duration={1500} />
            </div>
            <div className="text-blue-200">고객 지원</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.9, type: "spring" }}
            className="text-center"
          >
            <div className="mb-2">ISO 27001</div>
            <div className="text-blue-200">보안 인증</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
