import { useState, useEffect } from 'react'; 
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'; 
import image1 from "./assets_4/mint1.png";
import image2 from "./assets_4/mint2.png";
import image3 from "./assets_4/mint3.png";
import image4 from "./assets_4/mint4.png";
import image5 from "./assets_4/mint5.png";
import "./App.css"

import Web3 from 'web3'; // Import Web3 library
import { BigNumber} from "@ethersproject/bignumber";
const contractABI = require("./Mirage.json")
const ethers = require("ethers");
const contractAddress = '0xe33ee637f63c604f74309d5242a0b6536d88ee5d';
const web3 = new Web3('https://etherscan.io');

const Mint = () => {
    const [mintAmount, setMintAmount] = useState(1);
    const [tokenID, setTokenID] = useState(0);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                const _web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
                    setWeb3(_web3);
                } catch (err) {
                    console.error('Error connecting to Metamask:', err);
                }
            }
        };

        initWeb3();
    }, []);

    async function mintToken() {
        if (web3) {
            try {
                const accounts = await web3.eth.getAccounts();
                const account = accounts[0];

                const contract = new web3.eth.Contract(contractABI, contractAddress);
                const result = await contract.methods.mint(tokenID).send({
                    from: account,
                    value: web3.utils.toWei((0.01).toString(), 'ether'),
                });

                console.log('Token minted:', result);
            } catch (error) {
                console.error('Error minting token:', error);
            }
        }
    }

    const handleMint = async () => {
        await mintToken();
    };

    return(
        <Flex className='Mint_Page' justify={"center"} align={"center"} height={"100vh"} paddingBottom={"150px"}>
            <img className='Mint1' src={image1} alt='' />
            <img className='Mint2' src={image2} alt='' />
            <img className='Mint3' src={image3} alt='' />
            <img className='Mint4' src={image4} alt='' />
            <img className='Mint5' src={image5} alt='' />
            <Box className='Mint_Main_Section'>
                <div>
                    <Text fontSize={"45px"} color={'white'} width={'400px'}>Mirage</Text>
                    <Text 
                        fontSize={"25px"}
                        color={"white"}
                        letterSpacing={"-5.5%"}
                    > 
                         <br/>
                        Edition of 1054<br/>
                        0.01 Ethereum per token <br/>
                        Select your chosen token ID
                       

                    </Text>
                </div>
                    <div>
                        <Flex align={"center"} justify={"center"}>
    
                            <Input 
                                min ={0}
                                fontFamily={"inherit"}
                                width={"100px"}
                                height={"40px"}
                                textAlign={"center"}
                                paddingLeft={"19px"}
                                marginTop={"10px"}
                                type='number' 
                                value={tokenID}
                                onChange={(e) => setTokenID(e.target.value)}
                            />
                            
                        </Flex>
                        <Button
                            backgroundColor={"white"}
                            borderRadius={"5px"}
                            color={"black"}
                            cursor={"pointer"}
                            fontFamily={"inherit"}
                            padding={"15px"}
                            marginTop={"10px"} 
                            onClick={handleMint}
                        >
                            Mint 
                        </Button>
                    </div>         
            </Box>
        </Flex>
        
    );

};

export default Mint;
