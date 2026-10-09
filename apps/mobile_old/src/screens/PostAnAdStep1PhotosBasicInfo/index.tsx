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
					backgroundColor: "#FFFFFF",
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFFF0",
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								paddingVertical: 9,
								paddingHorizontal: 16,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/lyqs7e4c_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 36,
									height: 36,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"Create Listing"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Step 1 of 3"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ke1kadt6_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 36,
									height: 36,
								}}
							/>
						</View>
						<View 
							style={{
								backgroundColor: "#E2E8F8",
							}}>
							<View 
								style={{
									width: 146,
									height: 4,
									backgroundColor: "#FC6901",
									borderTopRightRadius: 9999,
									borderBottomRightRadius: 9999,
								}}>
							</View>
						</View>
					</View>
					<View 
						style={{
							paddingTop: 16,
							paddingHorizontal: 16,
							marginBottom: 32,
						}}>
						<View 
							style={{
								marginBottom: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 4,
								}}>
								<View 
									style={{
										width: 8,
										height: 8,
										backgroundColor: "#D04400",
										borderRadius: 9999,
										marginRight: 8,
									}}>
								</View>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"MEDIA & CATEGORY"}
								</Text>
							</View>
							<View 
								style={{
									marginBottom: 4,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"Add Photos & Category"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/dyd0qcao_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 14,
										height: 14,
										marginRight: 6,
									}}
								/>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"High-quality photos increase your buyer inquiries by 3x"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 24,
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
									<Text 
										style={{
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
											marginRight: 6,
										}}>
										{"Photos"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"(1/10 photos)"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#A63500",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Reorder"}
								</Text>
							</View>
							<ScrollView 
								horizontal
								showsHorizontalScrollIndicator={false} 
								style={{
									flexDirection: "row",
									paddingVertical: 2,
									marginBottom: 12,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FFFFFF00",
										borderColor: "#DCE2F3",
										borderRadius: 16,
										borderWidth: 1,
										padding: 1,
										marginRight: 12,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<ImageBackground 
										source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rszv6uio_expires_30_days.png"}} 
										resizeMode = {'stretch'}
										imageStyle={{borderRadius: 16,}}
										style={{
											alignSelf: "flex-start",
											alignItems: "center",
											paddingTop: 8,
										}}
										>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 83,
											}}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													backgroundColor: "#151C27CC",
													borderRadius: 9999,
													paddingVertical: 2,
													paddingHorizontal: 8,
													marginRight: 43,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/flsrxy3a_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														borderRadius: 9999,
														width: 10,
														height: 9,
														marginRight: 4,
													}}
												/>
												<Text 
													style={{
														color: "#FFFFFF",
														fontSize: 10,
													}}>
													{"Cover"}
												</Text>
											</View>
											<View 
												style={{
													backgroundColor: "#FFFFFF00",
													borderRadius: 9999,
													padding: 7,
													shadowColor: "#0000001A",
													shadowOpacity: 0.1,
													shadowOffset: {
													    width: 0,
													    height: 1
													},
													shadowRadius: 2,
													elevation: 2,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/cjjymor1_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														borderRadius: 9999,
														width: 8,
														height: 8,
													}}
												/>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/jmugcii4_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 16,
												width: 142,
												height: 26,
											}}
										/>
									</ImageBackground>
								</TouchableOpacity>
								<View 
									style={{
										alignItems: "center",
										backgroundColor: "#FFDBCF33",
										borderColor: "#A6350066",
										borderRadius: 16,
										borderWidth: 2,
										paddingVertical: 31,
										paddingHorizontal: 40,
										marginRight: 12,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2t9b7ewp_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 40,
											height: 40,
											marginBottom: 6,
										}}
									/>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 6,
										}}>
										{"Add Photo"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Up to 10MB"}
									</Text>
								</View>
								<View 
									style={{
										alignItems: "center",
										backgroundColor: "#FFDBCF33",
										borderColor: "#A6350066",
										borderRadius: 16,
										borderWidth: 2,
										paddingVertical: 31,
										paddingHorizontal: 40,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/69tqidyj_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 40,
											height: 40,
											marginBottom: 6,
										}}
									/>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 6,
										}}>
										{"Slot 3"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Up to 10MB"}
									</Text>
								</View>
							</ScrollView>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F0F3FF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 11,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0cubbxth_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 17,
										height: 17,
										marginRight: 8,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
										}}>
										{"Pro tip: Add photos from multiple angles for faster\nsales."}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 24,
							}}>
							<View 
								style={{
									marginBottom: 16,
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
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"Product Title *"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"32/70"}
									</Text>
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
										paddingVertical: 12,
										paddingHorizontal: 17,
										marginBottom: 6,
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
											color: "#151C27",
											fontSize: 14,
										}}>
										{"Apple MacBook Air M2 256GB Midnight"}
									</Text>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4b3pic2n_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 15,
											height: 21,
										}}
									/>
								</View>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"Include brand, model, key specs, and year for best search\nvisibility."}
								</Text>
							</View>
							<View 
								style={{
									marginBottom: 16,
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
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"Category *"}
									</Text>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Change"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										backgroundColor: "#F0F3FF66",
										borderColor: "#DCE2F3",
										borderRadius: 16,
										borderWidth: 1,
										padding: 15,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wpenekyd_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 12,
												width: 40,
												height: 40,
												marginRight: 12,
											}}
										/>
										<View 
											style={{
												alignItems: "center",
											}}>
											<View 
												style={{
													paddingRight: 33,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 14,
														fontWeight: "bold",
													}}>
													{"Laptops & Computers"}
												</Text>
											</View>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Text 
													style={{
														color: "#555F6F",
														fontSize: 12,
														marginRight: 4,
													}}>
													{"Electronics"}
												</Text>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/d0wtdqll_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 3,
														height: 6,
														marginRight: 4,
													}}
												/>
												<Text 
													style={{
														color: "#555F6F",
														fontSize: 12,
													}}>
													{"Computers & Tech"}
												</Text>
											</View>
										</View>
									</View>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/af4nt0d0_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 16,
											width: 11,
											height: 18,
										}}
									/>
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
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"Condition *"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Required"}
									</Text>
								</View>
								<View 
									style={{
										paddingRight: 25,
										marginBottom: 8,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 8,
										}}>
										<TouchableOpacity 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#FFFFFF",
												borderColor: "#DCE2F3",
												borderRadius: 12,
												borderWidth: 1,
												paddingVertical: 14,
												marginRight: 33,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Brand New"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#FFFFFF",
												borderColor: "#DCE2F3",
												borderRadius: 12,
												borderWidth: 1,
												paddingVertical: 14,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Like New / Open Box"}
											</Text>
										</TouchableOpacity>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<TouchableOpacity 
											style={{
												flex: 1,
												flexDirection: "row",
												justifyContent: "center",
												alignItems: "center",
												backgroundColor: "#FFDBCF4D",
												borderColor: "#FC6901",
												borderRadius: 12,
												borderWidth: 2,
												paddingVertical: 14,
												marginRight: 36,
												shadowColor: "#0000000D",
												shadowOpacity: 0.1,
												shadowOffset: {
												    width: 0,
												    height: 1
												},
												shadowRadius: 2,
												elevation: 2,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/6xf7ypo7_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 12,
													width: 13,
													height: 13,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Used - Good"}
											</Text>
										</TouchableOpacity>
										<View 
											style={{
												flex: 1,
												backgroundColor: "#FFFFFF",
												borderColor: "#DCE2F3",
												borderRadius: 12,
												borderWidth: 1,
												paddingVertical: 14,
												paddingHorizontal: 17,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"For Parts / Not Working"}
											</Text>
										</View>
									</View>
								</View>
								<View >
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Minor cosmetic marks, 100% operational condition."}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#F0F3FF",
								borderColor: "#DCE2F3",
								borderRadius: 16,
								borderWidth: 1,
								paddingVertical: 15,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/sd418nnc_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 16,
									width: 13,
									height: 19,
									marginLeft: 15,
									marginRight: 12,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										paddingRight: 140,
										marginBottom: 2,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Listify Seller Protection"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
										width: 279,
									}}>
									{"Your ad will be reviewed to safeguard buyers and\nsecure authentic listings."}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFFE3",
							padding: 16,
						}}>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 13,
								paddingHorizontal: 17,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"Drafts"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#FC6901",
								borderRadius: 9999,
								paddingVertical: 14,
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
								{"Next: Details & Pricing"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/nykq989c_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 12,
									height: 12,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}