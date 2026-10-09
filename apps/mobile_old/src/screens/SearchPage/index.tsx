import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, } from "react-native";
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
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						paddingBottom: 42,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							paddingVertical: 13,
							paddingHorizontal: 21,
							marginBottom: 20,
						}}>
						<View 
							style={{
								paddingTop: 6,
								paddingHorizontal: 13,
								marginRight: 218,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"9:41"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/u9demtjk_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 17,
								height: 10,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ap9l4s46_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 10,
								marginRight: 5,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/bscbtym8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 11,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 20,
							marginHorizontal: 20,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4hl4h0pv_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 99,
								width: 40,
								height: 40,
								marginRight: 12,
							}}
						/>
						<View 
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#F4F4F4",
								borderRadius: 20,
								paddingVertical: 10,
								paddingHorizontal: 16,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 14,
								}}>
								{"Search here...."}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/31tec5ug_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 20,
									width: 16,
									height: 16,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							marginBottom: 28,
							marginHorizontal: 20,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 9,
							}}>
							<Text 
								style={{
									color: "#202020",
									fontSize: 18,
								}}>
								{"Search history"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/pl95ml7o_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 35,
									height: 35,
								}}
							/>
						</View>
						<View 
							style={{
								marginRight: 29,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 6,
								}}>
								<View 
									style={{
										width: 89,
										height: 36,
										backgroundColor: "#F4F4F4",
										borderRadius: 9,
										marginRight: 7,
									}}>
								</View>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#F4F4F4",
										borderRadius: 9,
										paddingVertical: 7,
										marginRight: 8,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 17,
										}}>
										{"Mac Book"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#F4F4F4",
										borderRadius: 9,
										paddingVertical: 7,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 17,
										}}>
										{"Apartments"}
									</Text>
								</TouchableOpacity>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F4F4F4",
										borderRadius: 9,
										paddingVertical: 7,
										paddingHorizontal: 22,
										marginRight: 7,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 17,
										}}>
										{"Books and Docs"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F4F4F4",
										borderRadius: 9,
										paddingVertical: 7,
										paddingHorizontal: 28,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 17,
										}}>
										{"Garment"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							marginBottom: 38,
							marginLeft: 20,
						}}>
						<Text 
							style={{
								color: "#202020",
								fontSize: 18,
								marginBottom: 14,
								marginRight: 169,
							}}>
							{"Recommendations"}
						</Text>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 6,
							}}>
							<TouchableOpacity 
								style={{
									backgroundColor: "#F8F8F8",
									borderRadius: 9,
									paddingVertical: 7,
									paddingHorizontal: 14,
									marginRight: 6,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 17,
									}}>
									{"Skirt"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									backgroundColor: "#F8F8F8",
									borderRadius: 9,
									paddingVertical: 7,
									paddingHorizontal: 14,
									marginRight: 6,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 17,
									}}>
									{"Accessories"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									backgroundColor: "#F8F8F8",
									borderRadius: 9,
									paddingVertical: 7,
									paddingHorizontal: 14,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 17,
									}}>
									{"Black T-Shirt"}
								</Text>
							</TouchableOpacity>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								marginRight: 115,
							}}>
							<TouchableOpacity 
								style={{
									backgroundColor: "#F8F8F8",
									borderRadius: 9,
									paddingVertical: 7,
									paddingHorizontal: 14,
									marginRight: 6,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 17,
									}}>
									{"Jeans"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									backgroundColor: "#F8F8F8",
									borderRadius: 9,
									paddingVertical: 7,
									paddingHorizontal: 14,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 17,
									}}>
									{"White Shoes"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<Text 
						style={{
							color: "#202020",
							fontSize: 21,
							fontWeight: "bold",
							marginBottom: 20,
							marginLeft: 23,
						}}>
						{"Discover"}
					</Text>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 10,
							marginLeft: 19,
						}}>
						<View 
							style={{
								marginRight: 18,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ffetmrk5_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								imageStyle={{borderRadius: 7,}}
								style={{
									alignSelf: "flex-start",
									paddingVertical: 6,
									marginBottom: 7,
								}}
								>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/jytt84z3_expires_30_days.png"}} 
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
						<View >
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/smmlwwbm_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								imageStyle={{borderRadius: 7,}}
								style={{
									alignSelf: "flex-start",
									paddingVertical: 6,
									marginBottom: 7,
								}}
								>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/z75wzvi9_expires_30_days.png"}} 
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
								}}>
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
						</View>
					</View>
					<ScrollView 
						horizontal
						showsHorizontalScrollIndicator={false} 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							paddingLeft: 19,
						}}>
						<View 
							style={{
								marginRight: 18,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/eyntem6w_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								imageStyle={{borderRadius: 7,}}
								style={{
									alignSelf: "flex-start",
									paddingVertical: 6,
									marginBottom: 7,
								}}
								>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/09t4evjm_expires_30_days.png"}} 
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
								marginRight: -155,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5v4q4u9b_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								imageStyle={{borderRadius: 7,}}
								style={{
									alignSelf: "flex-start",
									paddingVertical: 6,
									marginBottom: 7,
								}}
								>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/bb0a7vh1_expires_30_days.png"}} 
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
								}}>
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
						</View>
						<View >
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5v4q4u9b_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								imageStyle={{borderRadius: 7,}}
								style={{
									alignSelf: "flex-start",
									paddingVertical: 6,
									marginBottom: 7,
								}}
								>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rbn9kp30_expires_30_days.png"}} 
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
										{"I pad 20 po"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
										}}>
										{"Rs 25000/-"}
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
										marginRight: 14,
									}}>
									{"Agha  4, Lah...  "}
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
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}