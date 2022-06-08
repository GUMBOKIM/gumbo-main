import styled from "styled-components";
import React from "react";
import './PageLayout.css'
import {PageSizeInfo} from "./PageLayoutEffect";


const Gear = styled.div<{pageSizeInfo: PageSizeInfo, delay: number, position: number}>`
  position: absolute;
  width: 10px;
  height: 10px;
  top: -20px;
  left: ${props => props.position}px;

  z-index: 1;
  opacity: 0.5;
  display: flex;

  @keyframes move {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(${props => props.pageSizeInfo.pageHeight}px);
    }
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotate 2s infinite linear, move 20s ${props => props.delay}s infinite linear;
`

export const EffectItem: React.FC<{ pageSizeInfo: PageSizeInfo}> = ({pageSizeInfo}) => {
    const delay = Math.floor(Math.random() * 20)
    const position = Math.floor(Math.random() * pageSizeInfo.pageWidth);

    return (
        <Gear pageSizeInfo={pageSizeInfo} delay={delay} position={position}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 300 300" fill="white"
                 preserveAspectRatio="xMidYMid meet">
                <g>
                    <g>
                        <g>
                            <path d="M150.057,105.1c-24.789,0-44.955,20.167-44.955,44.955s20.166,44.955,44.955,44.955
				c24.789,0,44.955-20.167,44.955-44.955S174.845,105.1,150.057,105.1z M150.057,178.36c-15.607,0-28.305-12.697-28.305-28.305
				s12.697-28.305,28.305-28.305c15.608,0,28.305,12.697,28.305,28.305S165.663,178.36,150.057,178.36z"/>
                            <path d="M297.365,183.342l-25.458-22.983v-20.608l25.457-22.981c2.614-2.361,3.461-6.112,2.112-9.366l-13.605-32.846
				c-1.348-3.253-4.588-5.305-8.115-5.128l-34.252,1.749l-14.571-14.571l1.749-34.251c0.18-3.518-1.874-6.769-5.128-8.116
				L192.707,0.635c-3.253-1.35-7.005-0.501-9.365,2.111l-22.984,25.458h-20.606L116.77,2.746c-2.361-2.613-6.112-3.458-9.365-2.111
				L74.559,14.24c-3.255,1.348-5.308,4.599-5.128,8.116l1.75,34.251L56.609,71.178l-34.252-1.749
				c-3.506-0.188-6.768,1.874-8.115,5.128L0.635,107.403c-1.348,3.255-0.502,7.005,2.112,9.366l25.457,22.981v20.608L2.749,183.341
				c-2.614,2.361-3.461,6.112-2.112,9.366l13.605,32.846c1.348,3.255,4.603,5.321,8.115,5.128l34.252-1.749l14.572,14.571
				l-1.75,34.251c-0.18,3.518,1.874,6.769,5.128,8.116l32.846,13.606c3.255,1.352,7.005,0.502,9.365-2.111l22.984-25.458h20.606
				l22.984,25.458c1.613,1.785,3.873,2.746,6.182,2.746c1.071,0,2.152-0.208,3.183-0.634l32.846-13.606
				c3.255-1.348,5.308-4.599,5.128-8.116l-1.749-34.251l14.571-14.571l34.252,1.749c3.506,0.178,6.768-1.874,8.115-5.128
				l13.605-32.846C300.825,189.453,299.979,185.703,297.365,183.342z M272.737,213.754l-32.079-1.639
				c-2.351-0.127-4.646,0.764-6.311,2.428l-19.804,19.804c-1.666,1.666-2.547,3.958-2.428,6.311l1.638,32.079l-21.99,9.109
				l-21.525-23.843c-1.578-1.747-3.824-2.746-6.179-2.746h-28.006c-2.355,0-4.601,0.998-6.179,2.746l-21.525,23.843l-21.99-9.109
				l1.639-32.079c0.12-2.353-0.763-4.646-2.429-6.311l-19.803-19.804c-1.665-1.665-3.955-2.55-6.311-2.428l-32.079,1.639
				l-9.109-21.99l23.842-21.525c1.748-1.58,2.746-3.824,2.746-6.179v-28.008c0-2.355-0.998-4.601-2.746-6.179l-23.842-21.525
				l9.109-21.99l32.079,1.639c2.354,0.124,4.646-0.763,6.311-2.428l19.803-19.803c1.666-1.666,2.549-3.958,2.429-6.313
				l-1.639-32.079l21.99-9.109l21.525,23.842c1.578,1.747,3.824,2.746,6.179,2.746h28.006c2.355,0,4.601-0.998,6.179-2.746
				l21.525-23.842l21.99,9.109l-1.638,32.079c-0.12,2.353,0.761,4.645,2.428,6.313l19.804,19.803
				c1.666,1.665,3.959,2.564,6.311,2.428l32.079-1.639l9.109,21.99l-23.843,21.525c-1.748,1.58-2.746,3.824-2.746,6.179v28.008
				c0,2.355,0.998,4.601,2.746,6.179l23.843,21.525L272.737,213.754z"/>
                            <path d="M150.057,71.357c-43.394,0-78.698,35.305-78.698,78.698c0,43.394,35.304,78.698,78.698,78.698
				c43.394,0,78.698-35.305,78.698-78.698C228.754,106.661,193.45,71.357,150.057,71.357z M150.057,212.103
				c-34.214,0-62.048-27.834-62.048-62.048c0-34.214,27.834-62.048,62.048-62.048c34.214,0,62.048,27.834,62.048,62.048
				C212.105,184.269,184.269,212.103,150.057,212.103z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </Gear>
    );
}