import Image from 'next/image'

import medalGold from '../../../../../assets/medal_1.svg'
import medalSilver from '../../../../../assets/medal_2.svg'
import medalCooper from '../../../../../assets/medal_3.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Guilherme Alexandre
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            999
          </span>
          <Image
            src={medalGold}
            alt="medalha-de-ouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Guilherme Alexandre
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            998
          </span>
          <Image
            src={medalSilver}
            alt="medalha-de-prata"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Guilherme Alexandre
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            997
          </span>
          <Image
            src={medalCooper}
            alt="medalha-de-bronze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
