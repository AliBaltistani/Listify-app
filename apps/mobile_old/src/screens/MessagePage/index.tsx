import React, {useState} from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingBottom: 42,
				}}>
				<View 
					style={{
						alignSelf: "flex-start",
						alignItems: "center",
						marginBottom: 13,
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							paddingTop: 7,
							paddingHorizontal: 21,
							shadowColor: "#11122203",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 5
							},
							shadowRadius: 20,
							elevation: 20,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								paddingVertical: 10,
								marginBottom: 96,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g1dftiy1_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 17,
									height: 10,
									marginLeft: 263,
									marginRight: 5,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/aoju33ek_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 15,
									height: 10,
									marginRight: 5,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/psyyt4p6_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 11,
								}}
							/>
						</View>
						<Text 
							style={{
								position: "absolute",
								top: 13,
								left: 34,
								color: "#000000",
								fontSize: 15,
							}}>
							{"9:41"}
						</Text>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: 20,
							left: 24,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/q9zwagt4_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginRight: 12,
								}}
							/>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginRight: 151,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/jkgj49fe_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 44,
										height: 44,
										marginRight: 20,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
											fontWeight: "bold",
											marginBottom: 2,
										}}>
										{"Irfan Ali"}
									</Text>
									<Text 
										style={{
											color: "#6D6D6D",
											fontSize: 10,
										}}>
										{"Buyer Person"}
									</Text>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/6xncpri6_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 28,
									height: 34,
									marginRight: 23,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/33o7snv5_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 28,
									height: 34,
								}}
							/>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F8FAFCCC",
						borderColor: "#E2E8F0",
						borderRadius: 12,
						borderWidth: 1,
						padding: 9,
						marginBottom: 20,
						marginHorizontal: 21,
					}}>
					<View 
						style={{
							flex: 1,
							flexDirection: "row",
							alignItems: "center",
							marginRight: 43,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/q4voxuib_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 8,
								width: 50,
								height: 50,
							}}
						/>
						<View 
							style={{
								flex: 1,
								paddingLeft: 12,
							}}>
							<View >
								<Text 
									style={{
										color: "#1E293B",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"APPLE IPAD 79C (10th Gen)"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingTop: 2,
								}}>
								<View 
									style={{
										paddingRight: 18,
									}}>
									<Text 
										style={{
											color: "#FF5500",
											fontSize: 12,
											fontWeight: "bold",
											width: 26,
										}}>
										{"2000\npkr"}
									</Text>
								</View>
								<View 
									style={{
										paddingHorizontal: 6,
										marginRight: 1,
									}}>
									<Text 
										style={{
											color: "#94A3B8",
											fontSize: 10,
										}}>
										{"•"}
									</Text>
								</View>
								<View 
									style={{
										alignItems: "center",
										paddingHorizontal: 6,
									}}>
									<Text 
										style={{
											color: "#64748B",
											fontSize: 10,
										}}>
										{"Skardu • Used "}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 8,
						}}>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFF7ED",
								borderColor: "#FF5500",
								borderRadius: 8,
								borderWidth: 1,
								paddingVertical: 4,
								paddingHorizontal: 11,
								marginRight: 1,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FF5500",
									fontSize: 11,
									fontWeight: "bold",
								}}>
								{"Make Offer"}
							</Text>
						</TouchableOpacity>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ydsw6g7z_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 30,
								height: 24,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						alignItems: "center",
						marginBottom: 33,
						marginLeft: 24,
					}}>
					<View >
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								marginBottom: 8,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0hawmg4q_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 31,
									width: 40,
									height: 40,
									marginRight: 22,
								}}
							/>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/owi44oiq_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								style={{
									paddingVertical: 12,
									paddingLeft: 16,
									paddingRight: 39,
									marginTop: 32,
								}}
								>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"hey Bilal How are you?"}
								</Text>
							</ImageBackground>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 8,
								marginBottom: 35,
								marginLeft: 207,
							}}>
							{"09:25 AM"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/d50x7fke_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 31,
								width: 40,
								height: 40,
								marginBottom: 207,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/xct4v2w8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 31,
								width: 40,
								height: 40,
							}}
						/>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: 92,
							right: -28,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ezbstd0n_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								alignSelf: "flex-start",
								paddingVertical: 12,
								paddingHorizontal: 16,
								marginBottom: 10,
							}}
							>
							<Text 
								style={{
									color: "#000000",
									fontSize: 12,
								}}>
								{"I want to buy this three phones?"}
							</Text>
						</ImageBackground>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5b9nzqx8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 12,
								width: 192,
								height: 122,
								marginRight: 20,
							}}
						/>
					</View>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ixe4cgag_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							position: "absolute",
							bottom: -26,
							right: -36,
							paddingVertical: 8,
							paddingHorizontal: 12,
						}}
						>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/owdtqonb_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 22,
									marginRight: 10,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/qkb4i3f1_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 122,
									height: 14,
									marginRight: 10,
								}}
							/>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 12,
								}}>
								{"00:16"}
							</Text>
						</View>
					</ImageBackground>
					<Text 
						style={{
							position: "absolute",
							bottom: 73,
							right: -4,
							color: "#797C7B",
							fontSize: 8,
						}}>
						{"09:25 AM"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#797C7B",
						fontSize: 8,
						marginBottom: 127,
						marginLeft: 268,
					}}>
					{"09:25 AM"}
				</Text>
				<View 
					style={{
						marginRight: 29,
					}}>
					<View >
						<View 
							style={{
								alignItems: "flex-end",
								backgroundColor: "#FFFFFF",
								paddingTop: 52,
								paddingRight: 22,
								marginBottom: 9,
								marginRight: 36,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/cnyqbj6p_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 8,
									paddingHorizontal: 12,
								}}
								>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0xnbfkhe_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 22,
										height: 22,
										marginRight: 10,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5t2kv1t2_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 122,
										height: 14,
										marginRight: 10,
									}}
								/>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 13,
									}}>
									{"00:16"}
								</Text>
							</ImageBackground>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 8,
								marginBottom: 16,
								marginLeft: 131,
							}}>
							{"09:25 AM"}
						</Text>
						<View 
							style={{
								alignSelf: "flex-start",
								backgroundColor: "#FFFFFF",
								borderColor: "#FED7AA",
								borderRadius: 12,
								borderWidth: 1,
								padding: 13,
								marginBottom: 25,
								marginLeft: 20,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Text 
									style={{
										color: "#FF5500",
										fontSize: 11,
										fontWeight: "bold",
										marginRight: 110,
									}}>
									{"COUNTER OFFER"}
								</Text>
								<View 
									style={{
										backgroundColor: "#FFEDD5",
										borderRadius: 9999,
										paddingVertical: 2,
										paddingHorizontal: 8,
									}}>
									<Text 
										style={{
											color: "#EA4A00",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Pending"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									alignItems: "center",
									paddingVertical: 8,
								}}>
								<View 
									style={{
										paddingHorizontal: 55,
									}}>
									<Text 
										style={{
											color: "#64748B",
											fontSize: 12,
										}}>
										{"Offered amount for iPad 79C"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#0F172A",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"1,850 PKR"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 4,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FF5500",
										borderRadius: 8,
										paddingVertical: 7,
										paddingHorizontal: 27,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Accept Offer"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FFFFFF",
										borderColor: "#CBD5E1",
										borderRadius: 8,
										borderWidth: 1,
										paddingVertical: 7,
										paddingHorizontal: 41,
										marginHorizontal: 8,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#334155",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Counter"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginLeft: 28,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kt4c49ww_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 28,
									height: 34,
									marginRight: 2,
								}}
							/>
							<View 
								style={{
									flex: 1,
									flexDirection: "row",
									alignItems: "center",
									marginRight: 29,
								}}>
								<TextInput
									placeholder={"Write your message"}
									value={textInput1}
									onChangeText={onChangeTextInput1}
									style={{
										color: "#797C7B",
										fontSize: 12,
										marginRight: 10,
										flex: 1,
										backgroundColor: "#F3F6F6",
										borderRadius: 12,
										paddingVertical: 14,
										paddingHorizontal: 27,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3b2r5ero_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 28,
										height: 34,
									}}
								/>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/b0sieecd_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 28,
									height: 34,
									marginRight: 14,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/i5gdpa92_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 28,
									height: 34,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							position: "absolute",
							top: -96,
							right: -8,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								paddingVertical: 6,
								marginBottom: 6,
							}}>
							<View 
								style={{
									marginRight: 14,
								}}>
								<Text 
									style={{
										color: "#000D07",
										fontSize: 14,
										fontWeight: "bold",
										marginBottom: 10,
										marginLeft: 191,
									}}>
									{"You"}
								</Text>
								<ImageBackground 
									source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yl4gy1ia_expires_30_days.png"}} 
									resizeMode = {'stretch'}
									style={{
										alignSelf: "flex-start",
										paddingVertical: 12,
										paddingHorizontal: 7,
									}}
									>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 12,
										}}>
										{"Ok Bro Done what is you Budget?"}
									</Text>
								</ImageBackground>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ba9hl1cn_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#797C7B",
								fontSize: 8,
								marginBottom: 31,
								marginLeft: 1,
							}}>
							{"09:25 AM"}
						</Text>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								marginLeft: 191,
							}}>
							<Text 
								style={{
									color: "#000D07",
									fontSize: 14,
									fontWeight: "bold",
									marginRight: 14,
								}}>
								{"You"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/z0ipn035_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 48,
								}}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}