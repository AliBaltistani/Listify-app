import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground, } from "react-native";
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
					backgroundColor: "#F1F1F1",
					paddingTop: 33,
				}}>
				<View 
					style={{
						marginBottom: 25,
						marginRight: 18,
					}}>
					<View 
						style={{
							marginBottom: 4,
							marginLeft: 21,
							marginRight: 5,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<View 
								style={{
									width: 176,
									height: 40,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginRight: 31,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/xawu9o18_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 8,
										width: 40,
										height: 40,
										marginRight: 12,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yjt3u6xl_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 8,
										width: 1,
										height: 40,
									}}
								/>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/w5hh9zqz_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								top: -8,
								left: 0,
								width: 176,
								height: 56,
							}}
						/>
					</View>
					<View 
						style={{
							paddingTop: 4,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 12,
								marginLeft: 22,
							}}>
							<Text 
								style={{
									color: "#333333",
									fontSize: 14,
								}}>
								{"4500 Apparel"}
							</Text>
							<View 
								style={{
									flex: 1,
									alignSelf: "stretch",
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#C4C4C4",
									borderRadius: 33,
									paddingVertical: 10,
									paddingHorizontal: 15,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#555555",
										fontSize: 13,
										marginRight: 9,
									}}>
									{"New"}
								</Text>
								<View 
									style={{
										width: 8,
										height: 6,
									}}>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wwv7ptvc_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 36,
									height: 35,
									marginRight: 9,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8t8g90sw_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 26,
									height: 35,
								}}
							/>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								marginLeft: 17,
							}}>
							<TouchableOpacity 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FD6706D1",
									borderRadius: 30,
									paddingVertical: 8,
									paddingHorizontal: 10,
									marginRight: 12,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 14,
										marginRight: 9,
									}}>
									{"Laptop"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8b5lw179_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 30,
										width: 16,
										height: 16,
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F97D2C",
									borderRadius: 30,
									paddingVertical: 8,
									paddingHorizontal: 10,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 14,
										marginRight: 8,
									}}>
									{"Smart phones"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/xxdqbxxs_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 30,
										width: 16,
										height: 16,
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 19,
						marginHorizontal: 20,
					}}>
					<View 
						style={{
							flex: 1,
							marginRight: 20,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0xfpxotr_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 7,}}
							style={{
								paddingVertical: 4,
								marginBottom: 9,
							}}
							>
							<View 
								style={{
									alignItems: "flex-end",
									marginBottom: 119,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/l528qwuk_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 23,
										height: 23,
										marginRight: 9,
									}}
								/>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FDE68A",
									borderRadius: 4,
									paddingVertical: 3,
									paddingHorizontal: 6,
									marginLeft: 5,
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
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
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
										color: "#5959E2",
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
								}}>
								{"22 Sep"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flex: 1,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hhg2c7ra_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 7,}}
							style={{
								paddingVertical: 4,
								marginBottom: 9,
							}}
							>
							<View 
								style={{
									alignItems: "flex-end",
									marginBottom: 119,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/sl0r3dz0_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 23,
										height: 23,
										marginRight: 9,
									}}
								/>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FDE68A",
									borderRadius: 4,
									paddingVertical: 3,
									paddingHorizontal: 6,
									marginLeft: 5,
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
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
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
										color: "#5959E2",
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
								}}>
								{"22 Sep"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 195,
						marginHorizontal: 20,
					}}>
					<View 
						style={{
							flex: 1,
							marginRight: 20,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/z2zm51a9_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 7,}}
							style={{
								paddingVertical: 4,
								marginBottom: 9,
							}}
							>
							<View 
								style={{
									alignItems: "flex-end",
									marginBottom: 119,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1fxnfqi7_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 23,
										height: 23,
										marginRight: 9,
									}}
								/>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FDE68A",
									borderRadius: 4,
									paddingVertical: 3,
									paddingHorizontal: 6,
									marginLeft: 5,
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
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
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
										color: "#5959E2",
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
								}}>
								{"22 Sep"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flex: 1,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/y2bj455n_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 7,}}
							style={{
								paddingVertical: 4,
								marginBottom: 9,
							}}
							>
							<View 
								style={{
									alignItems: "flex-end",
									marginBottom: 119,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/q8a3nuyh_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 23,
										height: 23,
										marginRight: 9,
									}}
								/>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FDE68A",
									borderRadius: 4,
									paddingVertical: 3,
									paddingHorizontal: 6,
									marginLeft: 5,
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
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
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
										color: "#5959E2",
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
								}}>
								{"22 Sep"}
							</Text>
						</View>
					</View>
				</View>
				<View >
					<View 
						style={{
							position: "absolute",
							bottom: 57,
							left: 20,
							paddingBottom: 57,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/p0wsogh2_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 7,}}
							style={{
								alignSelf: "flex-start",
								paddingVertical: 4,
							}}
							>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/cn7jqu50_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 23,
									height: 23,
									marginBottom: 119,
									marginLeft: 158,
									marginRight: 9,
								}}
							/>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FDE68A",
									borderRadius: 4,
									paddingVertical: 3,
									paddingHorizontal: 6,
									marginLeft: 5,
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
							position: "absolute",
							bottom: 57,
							right: 20,
							paddingBottom: 57,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zycqtp5n_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 7,}}
							style={{
								alignSelf: "flex-start",
								paddingVertical: 4,
							}}
							>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/miy2ytkh_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 23,
									height: 23,
									marginBottom: 119,
									marginLeft: 158,
									marginRight: 9,
								}}
							/>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#FDE68A",
									borderRadius: 4,
									paddingVertical: 3,
									paddingHorizontal: 6,
									marginLeft: 5,
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
							height: 106,
						}}>
					</View>
				</View>
				<ImageBackground 
					source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/u2vddku7_expires_30_days.png"}} 
					resizeMode = {'stretch'}
					style={{
						paddingVertical: 8,
						paddingHorizontal: 22,
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/a792oi0i_expires_30_days.png"}} 
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
								marginRight: 33,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g7euip3e_expires_30_days.png"}} 
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/730xji4f_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 50,
								width: 55,
								height: 55,
								marginRight: 35,
							}}
						/>
						<View 
							style={{
								marginTop: 39,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/vdzfl0je_expires_30_days.png"}} 
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
								flex: 1,
							}}>
						</View>
						<View 
							style={{
								marginTop: 36,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8eeq4noy_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
									marginLeft: 12,
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