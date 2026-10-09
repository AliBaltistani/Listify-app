import React, {useState} from "react";
import { View, ScrollView, Image, Text, ImageBackground, TouchableOpacity, TextInput, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
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
					paddingTop: 8,
				}}>
				<View 
					style={{
						marginBottom: 39,
					}}>
					<View 
						style={{
							paddingTop: 64,
							paddingHorizontal: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								paddingVertical: 8,
								marginBottom: 12,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/bm82bxmf_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 14,
										height: 10,
										marginRight: 6,
									}}
								/>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Buyer Preview"}
								</Text>
							</View>
							<View 
								style={{
									backgroundColor: "#E2E8F8",
									borderRadius: 9999,
									paddingVertical: 2,
									paddingHorizontal: 8,
								}}>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Live Mockup"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 16,
								borderWidth: 1,
								padding: 1,
								marginBottom: 12,
								shadowColor: "#0000000D",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/aavopyny_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								style={{
									paddingVertical: 12,
									paddingRight: 12,
								}}
								>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 187,
										marginLeft: 12,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 4,
												paddingHorizontal: 10,
												marginRight: 6,
												shadowColor: "#0000000D",
												shadowOpacity: 0.1,
												shadowOffset: {
												    width: 0,
												    height: 1
												},
												shadowRadius: 2,
												elevation: 2,
											}}>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 10,
													marginRight: 4,
												}}>
												{"auto_awesome"}
											</Text>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"Cover Photo"}
											</Text>
										</View>
										<View 
											style={{
												backgroundColor: "#2A313DCC",
												borderRadius: 9999,
												paddingVertical: 4,
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#EBF1FF",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"1/4 photos"}
											</Text>
										</View>
									</View>
									<TouchableOpacity 
										style={{
											backgroundColor: "#FFFFFF00",
											borderRadius: 9999,
											padding: 10,
											shadowColor: "#0000001A",
											shadowOpacity: 0.1,
											shadowOffset: {
											    width: 0,
											    height: 1
											},
											shadowRadius: 2,
											elevation: 2,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gavac89c_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 10,
												height: 10,
											}}
										/>
									</TouchableOpacity>
								</View>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFFF0",
										borderColor: "#00685F33",
										borderRadius: 9999,
										borderWidth: 1,
										paddingVertical: 5,
										paddingHorizontal: 11,
										marginLeft: 12,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}}>
									<Text 
										style={{
											color: "#00685F",
											fontSize: 10,
											marginRight: 4,
										}}>
										{"check_circle"}
									</Text>
									<Text 
										style={{
											color: "#00685F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Used - Good"}
									</Text>
								</View>
							</ImageBackground>
							<View 
								style={{
									padding: 16,
								}}>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 6,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 20,
												fontWeight: "bold",
												marginRight: 9,
											}}>
											{"$850"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"USD"}
										</Text>
									</View>
									<View 
										style={{
											backgroundColor: "#FFDBCF",
											borderRadius: 9999,
											paddingVertical: 2,
											paddingHorizontal: 8,
											marginRight: 51,
										}}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Negotiable"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										marginBottom: 7,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Apple MacBook Air M2 256GB\nMidnight"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingVertical: 5,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2z2mgzea_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 9,
												height: 11,
												marginRight: 4,
											}}
										/>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Gulberg III, Lahore"}
										</Text>
									</View>
									<View 
										style={{
											backgroundColor: "#E7EEFE",
											borderRadius: 4,
											paddingTop: 2,
											paddingHorizontal: 8,
										}}>
										<Text 
											style={{
												color: "#D6E0F3",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Just now"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								paddingTop: 8,
								marginBottom: 11,
							}}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"REVIEW DETAILS"}
							</Text>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 16,
								borderWidth: 1,
								padding: 17,
								marginBottom: 12,
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
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/pthdjql8_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 32,
											height: 32,
											marginRight: 8,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Photos & Category"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 2,
										}}>
										{"Edit"}
									</Text>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 12,
										}}>
										{"chevron_right"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderColor: "#A6350066",
										borderRadius: 12,
										borderWidth: 1,
										paddingTop: 1,
										paddingHorizontal: 1,
										marginRight: 8,
									}}>
									<ImageBackground 
										source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/al1d1l20_expires_30_days.png"}} 
										resizeMode = {'stretch'}
										imageStyle={{borderRadius: 12,}}
										style={{
											alignItems: "flex-end",
											paddingTop: 54,
											paddingRight: 4,
										}}
										>
										<View 
											style={{
												backgroundColor: "#FFFFFFE3",
												borderRadius: 4,
												paddingHorizontal: 4,
												marginBottom: 4,
											}}>
											<Text 
												style={{
													color: "#A63500",
													fontSize: 9,
													fontWeight: "bold",
												}}>
												{"1"}
											</Text>
										</View>
									</ImageBackground>
								</View>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingTop: 1,
										paddingHorizontal: 1,
										marginRight: 9,
									}}>
									<ImageBackground 
										source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9h91mloa_expires_30_days.png"}} 
										resizeMode = {'stretch'}
										imageStyle={{borderRadius: 12,}}
										style={{
											alignItems: "flex-end",
											paddingTop: 54,
											paddingRight: 4,
										}}
										>
										<View 
											style={{
												backgroundColor: "#FFFFFFE3",
												borderRadius: 4,
												paddingHorizontal: 4,
												marginBottom: 4,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 9,
													fontWeight: "bold",
												}}>
												{"2"}
											</Text>
										</View>
									</ImageBackground>
								</View>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingTop: 1,
										paddingHorizontal: 1,
										marginRight: 8,
									}}>
									<ImageBackground 
										source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ivv2txut_expires_30_days.png"}} 
										resizeMode = {'stretch'}
										imageStyle={{borderRadius: 12,}}
										style={{
											alignItems: "flex-end",
											paddingTop: 54,
											paddingRight: 4,
										}}
										>
										<View 
											style={{
												backgroundColor: "#FFFFFFE3",
												borderRadius: 4,
												paddingHorizontal: 4,
												marginBottom: 4,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 9,
													fontWeight: "bold",
												}}>
												{"3"}
											</Text>
										</View>
									</ImageBackground>
								</View>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingTop: 1,
										paddingHorizontal: 1,
									}}>
									<ImageBackground 
										source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yufxae97_expires_30_days.png"}} 
										resizeMode = {'stretch'}
										imageStyle={{borderRadius: 12,}}
										style={{
											alignItems: "flex-end",
											paddingTop: 54,
											paddingRight: 3,
										}}
										>
										<View 
											style={{
												backgroundColor: "#FFFFFFE3",
												borderRadius: 4,
												paddingHorizontal: 4,
												marginBottom: 4,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 9,
													fontWeight: "bold",
												}}>
												{"4"}
											</Text>
										</View>
									</ImageBackground>
								</View>
							</View>
							<View 
								style={{
									paddingTop: 4,
								}}>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 6,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Category"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
										}}>
										{"Electronics > Laptops & Computers"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Condition"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
										}}>
										{"Used - Good"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 16,
								borderWidth: 1,
								padding: 17,
								marginBottom: 12,
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
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4iltkl5s_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 32,
											height: 32,
											marginRight: 8,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Pricing & Offers"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 2,
										}}>
										{"Edit"}
									</Text>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
										}}>
										{"chevron_right"}
									</Text>
								</View>
							</View>
							<View >
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 8,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Asking Price"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"$850 USD"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 7,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Market Value"}
									</Text>
									<View 
										style={{
											backgroundColor: "#89F5E766",
											borderRadius: 9999,
											paddingVertical: 1,
											paddingHorizontal: 8,
										}}>
										<Text 
											style={{
												color: "#00685F",
												fontSize: 10,
											}}>
											{"Recommended price"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Buyer Offers"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<View 
											style={{
												width: 8,
												height: 8,
												backgroundColor: "#00685F",
												borderRadius: 9999,
												marginRight: 4,
											}}>
										</View>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"Enabled (Negotiable)"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 16,
								borderWidth: 1,
								padding: 17,
								marginBottom: 12,
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
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1mtxq8lu_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 32,
											height: 32,
											marginRight: 8,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Description & Details"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 2,
										}}>
										{"Edit"}
									</Text>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
										}}>
										{"chevron_right"}
									</Text>
								</View>
							</View>
							<TextInput
								placeholder={"“MacBook Air M2 in pristine condition.Bought 6 months ago, battery cycle count 38(100% capacity). Kept in hard casethroughout...”"}
								value={textInput1}
								onChangeText={onChangeTextInput1}
								style={{
									color: "#555F6F",
									fontSize: 14,
									marginBottom: 12,
									backgroundColor: "#F0F3FF",
									borderRadius: 12,
									paddingVertical: 11,
									paddingHorizontal: 12,
								}}
							/>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#E2E8F8",
										borderRadius: 9999,
										paddingVertical: 4,
										paddingHorizontal: 10,
										marginRight: 6,
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 10,
											marginRight: 4,
										}}>
										{"inventory_2"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 10,
										}}>
										{"Original Packaging"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#E2E8F8",
										borderRadius: 9999,
										paddingVertical: 4,
										paddingHorizontal: 10,
										marginRight: 6,
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 10,
											marginRight: 4,
										}}>
										{"receipt_long"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 10,
										}}>
										{"Bill Available"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#E2E8F8",
										borderRadius: 9999,
										paddingVertical: 4,
										paddingHorizontal: 10,
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 10,
											marginRight: 5,
										}}>
										{"verified"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 10,
										}}>
										{"Like New"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 4,
									paddingHorizontal: 25,
								}}>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderRadius: 12,
										paddingVertical: 7,
										paddingHorizontal: 8,
										marginRight: 8,
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"Storage"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"256GB SSD"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderRadius: 12,
										paddingVertical: 7,
										paddingHorizontal: 8,
										marginRight: 9,
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"RAM"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"8GB Unified"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#F0F3FF",
										borderRadius: 12,
										paddingVertical: 7,
										paddingHorizontal: 8,
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"Warranty"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"AppleCare"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 16,
								borderWidth: 1,
								padding: 17,
								marginBottom: 13,
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
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kmytm2kl_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 32,
											height: 32,
											marginRight: 8,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"Contact & Location"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 2,
										}}>
										{"Edit"}
									</Text>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 12,
										}}>
										{"chevron_right"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#E7EEFE",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 1,
									marginBottom: 12,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gcm6tum9_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										position: "absolute",
										bottom: 0,
										right: 1,
										left: 1,
										borderRadius: 12,
										height: 110,
									}}
								/>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#2A313D99", "#2A313D00", "#2A313D00"]}
									style={{
										flexDirection: "row",
										alignItems: "center",
										paddingTop: 86,
										paddingBottom: 10,
										paddingLeft: 10,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gdkdbs1n_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 10,
											height: 13,
											marginRight: 6,
										}}
									/>
									<Text 
										style={{
											color: "#EBF1FF",
											fontSize: 10,
										}}>
										{"Gulberg III, Lahore, Punjab"}
									</Text>
								</LinearGradient>
							</View>
							<View 
								style={{
									paddingTop: 4,
								}}>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 8,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Phone Visibility"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/pgik62kn_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 9,
												height: 9,
												marginRight: 4,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"+92 300 1234567"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Chat Inquiries"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/a8cbz40r_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 10,
												height: 10,
												marginRight: 4,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"Listify In-App Chat"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<LinearGradient 
							start={{x:0, y:0}}
							end={{x:0, y:1}}
							colors={["#FFDBCF99", "#FFFFFF", "#FFFFFF"]}
							style={{
								borderColor: "#A6350033",
								borderRadius: 16,
								borderWidth: 2,
								padding: 18,
								marginBottom: 12,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 12,
								}}>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 4,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 2,
												paddingHorizontal: 8,
												marginRight: 8,
											}}>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 10,
													marginRight: 2,
												}}>
												{"bolt"}
											</Text>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"FASTER SALE"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 18,
												fontWeight: "bold",
											}}>
											{"Boost your Ad"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
											paddingTop: 2,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												width: 246,
											}}>
											{"Feature this ad on top of search results and\ncategory rails for 7 days."}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5ud567q0_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 40,
										height: 40,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									paddingVertical: 13,
									paddingHorizontal: 12,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4mb0o77n_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 4,
											width: 22,
											height: 22,
											marginRight: 9,
										}}
									/>
									<View 
										style={{
											alignItems: "center",
											paddingBottom: 2,
										}}>
										<View 
											style={{
												paddingRight: 48,
												marginBottom: 7,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Feature for 7 days"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 10,
											}}>
											{"Get up to 5x more buyer views"}
										</Text>
									</View>
								</View>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"+$4.99"}
								</Text>
							</View>
						</LinearGradient>
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#F0F3FF",
								borderRadius: 12,
								paddingVertical: 12,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wzo9pu49_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 10,
									height: 13,
									marginLeft: 12,
									marginRight: 10,
								}}
							/>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									width: 305,
								}}>
								{"By publishing, you agree to Listify Listing Policies &\nSafety Guidelines. Your ad will go live instantly and be\nvisible to verified local buyers."}
							</Text>
						</View>
					</View>
					<View 
						style={{
							position: "absolute",
							top: -8,
							left: 0,
							alignItems: "center",
							backgroundColor: "#FFFFFF",
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
								flexDirection: "row",
								alignItems: "center",
								paddingVertical: 9,
								paddingHorizontal: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginRight: 108,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kmjubzfg_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 36,
										height: 36,
										marginRight: 8,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View >
										<Text 
											style={{
												color: "#151C27",
												fontSize: 18,
												fontWeight: "bold",
												marginRight: 29,
											}}>
											{"Create Listing"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Step 3 of 3: Review & Publish"}
										</Text>
									</View>
								</View>
							</View>
							<View 
								style={{
									borderRadius: 4,
									paddingVertical: 4,
									paddingHorizontal: 8,
								}}>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Drafts"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								alignItems: "center",
							}}>
							<View 
								style={{
									width: 390,
									height: 4,
									backgroundColor: "#DCE2F3",
								}}>
							</View>
							<View 
								style={{
									width: 390,
									height: 4,
									backgroundColor: "#FC6901",
									borderTopRightRadius: 9999,
									borderBottomRightRadius: 9999,
								}}>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFFF0",
						paddingVertical: 12,
						paddingHorizontal: 16,
						shadowColor: "#1118270D",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: -4
						},
						shadowRadius: 16,
						elevation: 16,
					}}>
					<TouchableOpacity 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 9999,
							borderWidth: 1,
							paddingVertical: 13,
							paddingHorizontal: 21,
							marginRight: 12,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"Back"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFF00",
							borderRadius: 9999,
							paddingVertical: 14,
							paddingHorizontal: 72,
							shadowColor: "#D0440057",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 8
							},
							shadowRadius: 20,
							elevation: 20,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
								marginRight: 8,
							}}>
							{"Publish Ad Now"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0vri6pj8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 10,
								height: 10,
							}}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}