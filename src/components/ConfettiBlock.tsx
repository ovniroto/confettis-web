import type { ComponentChildren } from "preact"
import { Confetti } from "./Buttons.tsx"
import Code from './Code.tsx'

type Props = {
    children: ComponentChildren
    title: string
    description: string
    toggle?: boolean
    callback: () => void
}

export default function ConfettiBlock(props: Props) {

    const backgroundColors = {
        color1: '#BB6AFF',
        color2: '#6AEBFF',
        color3: '#BB6AFF'
    }

	return (
        <div class="relative">
            <div class="absolute top-0 h-full w-full z-[-10]">
                <svg width="100%" height="100%" class="bluried opacity-[0.5]" viewBox="0 0 8965 5106" xmlns="http://www.w3.org/2000/svg">
                    <g><path d="M1123.49 2333.87C1233.54 2229.13 430.484 2053.82 512.5 1968.5L341.001 976.178L1123.49 283.5C1509.71 207.16 2689.92 193.648 2736 163C2782.08 132.352 3085.53 826.908 3609.5 798C4085.01 852.448 5528.99 578.343 5569.7 578.343C5620.59 578.343 7302.11 550.979 7353 578.343C7393.71 600.235 7430.72 1265.26 7669.5 1428.74C7241.5 1867.5 7968 2180 8408.2 2257.67C8463.38 2267.4 8446.97 2608.35 8509.98 2753.59V3402.34L8408.2 4682L7162.86 4291.05C6544.94 4361.91 5297.48 4504.74 5250.95 4509.12C5192.8 4514.59 3194.21 4563.43 3056.65 4568.9C2919.09 4574.37 898.524 4770.55 341.001 4509.12C-216.522 4247.68 761.131 3696.61 601.759 3298.78C442.386 2900.94 565.97 2933.36 659.915 2753.59C753.861 2573.83 985.93 2464.8 1123.49 2333.87Z" fill={ backgroundColors.color1 } /><path d="M1473.1 1203.01L0 1779.54L239.196 2213.06L603.825 2627.59C1048.83 2893.1 1954.02 3426.74 2014.69 3437.14C2075.37 3447.54 3643.04 3532.14 4419.3 3573.14C5250.33 3592.48 6940.19 3626.05 7051.43 3605.65C7190.47 3580.14 8599.4 3275.13 8662.6 3204.12C8713.16 3147.32 8885.27 2796.1 8965 2627.59C8570.55 2450.58 7746.27 2074.56 7604.69 1986.55C7427.73 1876.54 6283.28 1436.02 6169.51 1410.52C6078.5 1390.12 4603.72 1199.01 3877.7 1106L1473.1 1203.01Z" fill={ backgroundColors.color2 } /><path d="M3336.17 2502.03L1834.02 3966.09L1633 4324.81C1700.01 4438.06 1834.02 4683.38 1834.02 4758.63C1834.02 4852.68 2468.58 4947.47 2928.13 5013.82C3387.68 5080.17 3802.22 5013.82 4547.29 5080.17C5292.37 5146.52 5414.88 5070.69 6049.44 5013.82C6684.01 4956.95 6075.45 4787.06 6049.44 4664.57C6023.44 4542.08 5783.92 4466.26 5731.91 4399.91C5679.91 4333.56 5466.38 4173.15 5317.87 3899.74C5169.35 3626.32 5136.35 3342.7 5039.34 3030.64C4942.33 2718.58 4903.33 2133.83 4954.83 1756.15C4996.04 1454.01 5347.71 1397.43 5518.39 1406.91L6613 802.474C6295.63 604.156 5645.4 200.083 5583.4 170.335C5505.89 133.151 3996.74 -9.02598 3880.23 0.452462C3787.02 8.03521 3642.7 255.398 3582.2 378.132C3655.54 623.599 3802.22 1135.24 3802.22 1218.07C3802.22 1300.89 3491.52 2108.55 3336.17 2502.03Z" fill={ backgroundColors.color3 } /></g>
                </svg>
            </div>
            <div class="relative p-5 lg:p-0">
                <div class="bg-[#00000040] rounded-md shadow-xl p-[15px] md:p-[50px] mb-[80px] z-10 relative">

                    <div class="text-[16px] mt-[15px] text-[#fff] font-[Inter] w-[100%] text-left">

                        <div class="text-[16px] mt-[-5px] text-[#fff] font-[Inter] float-right">
                            <Confetti onClick={ props.callback }>
                                { props.toggle && (
                                    <>
                                        <i class="ti ti-confetti"></i> Toggle!
                                    </>
                                ) }
                                { !props.toggle && (
                                    <>
                                        <i class="ti ti-confetti"></i> Test!
                                    </>
                                ) }
                            </Confetti>
                        </div>

                        <h2 class="text-[28px] font-[Inter] font-bold">
                            { props.title }
                            <span class="text-[14px] font-normal block mt-[10px]">
                                { props.description }
                            </span>
                        </h2>

                        <Code class="language-javascript">
                            { props.children }
                        </Code>

                    </div>

                </div>
            </div>
        </div>
	)

}