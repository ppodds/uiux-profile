import { Box, Avatar, VStack, Text, ZStack, Pressable} from "native-base";
import '../App.css';
import { GoArrowUpLeft } from "react-icons/go";
import React from "react";
import { Link } from "react-router-dom";

function AvatarComponent(props) {
    return (
        <Box flexDirection={'row'} alignItems={'center'}>
            <Pressable alignItems={"center"} paddingX={10} paddingTop={'20px'} >
                <Box flexDirection={'row'} alignItems={'flex-end'}>
                    <Link to={`/${props.link}`}><Pressable>
                        {({ isHovered }) => {
                            return (<Avatar style={{transform: [{scale:isHovered ? 1.1 : 1}]}} size={'275px'} 
                            source={{
                                uri: props.img, 
                            }} 
                            >
                            </Avatar>);
                        }}
                    </Pressable></Link>
                </Box>
                <ZStack w={'160%'} alignItems={'flex-end'}>
                    <VStack>
                        {props.show ? <GoArrowUpLeft size={'2rem'} /> : null}
                        {props.show ? <Text fontFamily={"cwTeXKai"}>點擊任一頭像查看成員介紹,{'\n'}並使用上(左)/下(右)鍵輕鬆{'\n'}切換上下頁</Text> : null}
                        </VStack>
                </ZStack>
                <Text color={'#8E9D7D'} paddingTop={'2rem'} fontFamily={"cwTeXKai"} fontWeight={600} fontSize={'2rem'}>{props.name}</Text>
            </Pressable>   
        </Box>
    );
}

export default AvatarComponent;