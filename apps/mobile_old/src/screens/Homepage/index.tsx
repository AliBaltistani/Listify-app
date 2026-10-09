import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					borderColor: "#EBEBF6",
					borderRadius: 8,
					borderWidth: 4,
					paddingTop: 12,
				}}>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 8,
						marginLeft: 29,
						marginRight: 48,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 16,
							fontWeight: "bold",
						}}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/uzn42zq6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 68,
							height: 11,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 62,
						marginLeft: 10,
						marginRight: 21,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ixoc16eu_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 119,
							height: 60,
						}}
					/>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/k4hmggty_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 24,
							height: 24,
							marginRight: 30,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/832tybq0_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 24,
							height: 24,
							marginRight: 30,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kx76r4sf_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 17,
							height: 16,
						}}
					/>
				</View>
				<View 
					style={{
						marginBottom: 10,
						marginHorizontal: 20,
					}}>
					<TouchableOpacity 
						style={{
							position: "absolute",
							top: -56,
							left: -1,
							backgroundColor: "#FFFFFF",
							borderRadius: 50,
							paddingVertical: 11,
							paddingHorizontal: 8,
						}} onPress={()=>alert('Pressed!')}>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginRight: 25,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/i4lcdl0f_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
										marginRight: 6,
									}}
								/>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"Skardu, Lahore"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ftl7lqne_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					</TouchableOpacity>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/n7m8r5pq_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							top: -56,
							right: 1,
							borderRadius: 50,
							width: 46,
							height: 46,
						}}
					/>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#FAD2B7", "#FF9D5E", "#E7A072"]}
						style={{
							height: 156,
							borderColor: "#00000000",
							borderRadius: 25,
							borderWidth: 2,
						}}>
					</LinearGradient>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/t77jlabd_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							position: "absolute",
							top: -16,
							left: 0,
							paddingTop: 56,
							paddingLeft: 30,
							paddingRight: 207,
						}}
						>
						<View 
							style={{
								alignSelf: "flex-start",
								marginBottom: 10,
							}}>
							<Text 
								style={{
									color: "#282828",
									marginBottom: 9,
								}}>
								{"Nike\nFree Metcon"}
							</Text>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
									marginRight: 70,
								}}>
								{"$ 120.99"}
							</Text>
						</View>
					</ImageBackground>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/dqjcn9an_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 8,
							right: 2,
							width: 203,
							height: 158,
						}}
					/>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 8,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yhhi6p74_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 8,
								width: 9,
								height: 9,
								marginRight: 11,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/vxcwxwdh_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 8,
								width: 9,
								height: 9,
								marginRight: 11,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/63tpmvx7_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 8,
								width: 9,
								height: 9,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 16,
						marginHorizontal: 19,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginRight: 12,
							}}>
							{"Browse Categories"}
						</Text>
						<Text 
							style={{
								color: "#475569",
								fontSize: 10,
							}}>
							{"15+"}
						</Text>
					</View>
					<Text 
						style={{
							color: "#475569",
							fontSize: 10,
							textDecorationLine: "underline",
						}}>
						{"See more"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 2,
						marginHorizontal: 19,
					}}>
					<View 
						style={{
							flex: 1,
							flexDirection: "row",
							alignItems: "center",
							marginRight: 22,
						}}>
						<View 
							style={{
								flex: 1,
								marginRight: 22,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tn9lb6bg_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
									marginBottom: 4,
								}}
							/>
							<Text 
								style={{
									color: "#0F172A",
									fontSize: 10,
								}}>
								{"Mobiles"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								marginRight: 22,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/w3rscf56_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
									marginBottom: 4,
								}}
							/>
							<Text 
								style={{
									color: "#0F172A",
									fontSize: 10,
								}}>
								{"Property "}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								marginRight: 22,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5lrwg7vv_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
									marginBottom: 4,
								}}
							/>
							<Text 
								style={{
									color: "#0F172A",
									fontSize: 10,
								}}>
								{"Vehicles"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								marginRight: 22,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/487x5u0s_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
									marginBottom: 4,
								}}
							/>
							<Text 
								style={{
									color: "#0F172A",
									fontSize: 10,
									marginLeft: 11,
								}}>
								{"Bikes"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zsojghox_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
									marginBottom: 4,
								}}
							/>
							<Text 
								style={{
									color: "#0F172A",
									fontSize: 10,
									marginLeft: 16,
								}}>
								{"flat"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ccpi3w6x_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 48,
								height: 48,
								marginBottom: 4,
							}}
						/>
						<Text 
							style={{
								color: "#0F172A",
								fontSize: 10,
							}}>
							{"Fashions"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 13,
						marginHorizontal: 19,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginRight: 12,
							}}>
							{"Near to me"}
						</Text>
						<Text 
							style={{
								color: "#475569",
								fontSize: 12,
							}}>
							{"10+"}
						</Text>
					</View>
					<Text 
						style={{
							color: "#475569",
							fontSize: 10,
							textDecorationLine: "underline",
						}}>
						{"See more"}
					</Text>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 7,
						marginLeft: 19,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1n1nea8d_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						imageStyle={{borderRadius: 7,}}
						style={{
							paddingVertical: 6,
							marginRight: 18,
						}}
						>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/97qk0y2p_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 23,
								height: 23,
								marginBottom: 101,
								marginLeft: 126,
								marginRight: 6,
							}}
						/>
						<View 
							style={{
								alignSelf: "flex-start",
								backgroundColor: "#FDE68A",
								borderRadius: 4,
								paddingVertical: 3,
								paddingHorizontal: 6,
								marginLeft: 6,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Featured"}
							</Text>
						</View>
					</ImageBackground>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/exbnk171_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						imageStyle={{borderRadius: 7,}}
						style={{
							paddingVertical: 6,
						}}
						>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g8me0qer_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 23,
								height: 23,
								marginBottom: 101,
								marginLeft: 126,
								marginRight: 6,
							}}
						/>
						<View 
							style={{
								alignSelf: "flex-start",
								backgroundColor: "#FDE68A",
								borderRadius: 4,
								paddingVertical: 3,
								paddingHorizontal: 6,
								marginLeft: 6,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 10,
								}}>
								{"Featured"}
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						marginLeft: 19,
					}}>
					<View 
						style={{
							alignItems: "center",
							marginRight: 43,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 3,
							}}>
							{"Macbook 14"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
							}}>
							{"Rs 45000/-"}
						</Text>
					</View>
					<View 
						style={{
							backgroundColor: "#D9D9D9",
							borderRadius: 3,
							paddingVertical: 2,
							paddingHorizontal: 8,
							marginRight: 18,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 11,
							}}>
							{"New"}
						</Text>
					</View>
					<View 
						style={{
							alignItems: "center",
							marginRight: 43,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 12,
								marginBottom: 3,
							}}>
							{"I Phone 14 p"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
							}}>
							{"Rs 48000/-"}
						</Text>
					</View>
					<View 
						style={{
							backgroundColor: "#D9D9D9",
							borderRadius: 3,
							paddingVertical: 2,
							paddingHorizontal: 8,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 11,
							}}>
							{"New"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 13,
						marginLeft: 19,
					}}>
					<Text 
						style={{
							color: "#0F172A",
							fontSize: 10,
							marginRight: 13,
						}}>
						{"Gulberg Phase 4, Lah...  "}
					</Text>
					<Text 
						style={{
							color: "#0F172A",
							fontSize: 10,
							marginRight: 21,
						}}>
						{"22 Sep"}
					</Text>
					<Text 
						style={{
							color: "#0F172A",
							fontSize: 10,
							marginRight: 14,
						}}>
						{"Pareeshan chowk skd...  "}
					</Text>
					<Text 
						style={{
							color: "#0F172A",
							fontSize: 10,
						}}>
						{"22 Sep"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 102,
						marginHorizontal: 19,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginRight: 13,
							}}>
							{"Featured"}
						</Text>
						<Text 
							style={{
								color: "#475569",
								fontSize: 12,
							}}>
							{"10+"}
						</Text>
					</View>
					<Text 
						style={{
							color: "#475569",
							fontSize: 10,
							textDecorationLine: "underline",
						}}>
						{"See more"}
					</Text>
				</View>
				<View >
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/t0asgfpl_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 40,
							left: 19,
							borderRadius: 7,
							width: 155,
							height: 155,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/vff704yd_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 40,
							right: 93,
							borderRadius: 7,
							width: 155,
							height: 155,
						}}
					/>
					<View 
						style={{
							height: 106,
						}}>
					</View>
				</View>
				<ImageBackground 
					source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/bdwc24g7_expires_30_days.png"}} 
					resizeMode = {'stretch'}
					style={{
						paddingTop: 9,
						paddingLeft: 23,
						paddingRight: 6,
					}}
					>
					<View 
						style={{
							flexDirection: "row",
						}}>
						<View 
							style={{
								marginTop: 37,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2r50jkxu_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#FC6901",
									fontSize: 10,
								}}>
								{"HOME"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<View 
							style={{
								marginTop: 39,
								marginRight: 32,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0jzmbpr8_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#010101",
									fontSize: 10,
								}}>
								{"CHATS"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/efec1jme_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 50,
								width: 55,
								height: 55,
								marginRight: 34,
							}}
						/>
						<View 
							style={{
								marginTop: 39,
								marginRight: 40,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wiekp3pz_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 10,
								}}>
								{"MY ADS"}
							</Text>
						</View>
						<View 
							style={{
								paddingVertical: 13,
								paddingHorizontal: 12,
								marginTop: 20,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4y4xhpan_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
									marginLeft: 14,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 10,
								}}>
								{"ACCOUNT"}
							</Text>
						</View>
					</View>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}