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
					paddingHorizontal: 5,
				}}>
				<View >
					<View 
						style={{
							backgroundColor: "#F0F3FF",
							paddingBottom: 112,
						}}>
						<View 
							style={{
								backgroundColor: "#FFFFFFF0",
								paddingVertical: 12,
								paddingHorizontal: 16,
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
									marginBottom: 10,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g8rol50q_expires_30_days.png"}} 
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
											color: "#A63500",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Step 2 of 3"}
									</Text>
								</View>
								<View 
									style={{
										borderRadius: 8,
										paddingVertical: 4,
										paddingHorizontal: 8,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Drafts"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#DCE2F3",
									borderRadius: 9999,
								}}>
								<View 
									style={{
										width: 265,
										height: 6,
										backgroundColor: "#FC6901",
										borderRadius: 9999,
									}}>
								</View>
							</View>
						</View>
						<View 
							style={{
								paddingTop: 12,
								paddingHorizontal: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 9,
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
										alignItems: "center",
									}}>
									<TouchableOpacity 
										style={{
											backgroundColor: "#E7EEFE",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											padding: 1,
										}} onPress={()=>alert('Pressed!')}>
										<ImageBackground 
											source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/6urx85by_expires_30_days.png"}} 
											resizeMode = {'stretch'}
											imageStyle={{borderRadius: 8,}}
											style={{
												alignSelf: "flex-start",
												paddingTop: 32,
												paddingLeft: 25,
												paddingRight: 1,
											}}
											>
											<View 
												style={{
													alignSelf: "flex-start",
													backgroundColor: "#D04400",
													borderTopLeftRadius: 2,
													paddingHorizontal: 4,
												}}>
												<Text 
													style={{
														color: "#FFFBFF",
														fontSize: 9,
														fontWeight: "bold",
													}}>
													{"2/4"}
												</Text>
											</View>
										</ImageBackground>
									</TouchableOpacity>
									<View 
										style={{
											alignItems: "center",
											paddingLeft: 12,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<View 
												style={{
													backgroundColor: "#D6E0F3",
													borderRadius: 4,
													paddingVertical: 2,
													paddingHorizontal: 6,
													marginRight: 6,
												}}>
												<Text 
													style={{
														color: "#121C2A",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"Laptops & Tech"}
												</Text>
											</View>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
												}}>
												{"• Excellent"}
											</Text>
										</View>
										<View 
											style={{
												paddingRight: 17,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"MacBook Air M2 (2022)"}
											</Text>
										</View>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kqu0htf2_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 20,
										height: 20,
									}}
								/>
							</View>
							<View 
								style={{
									paddingTop: 4,
									marginBottom: 12,
								}}>
								<View 
									style={{
										marginBottom: 2,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 20,
											fontWeight: "bold",
										}}>
										{"Description & Pricing"}
									</Text>
								</View>
								<View >
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Provide clear item condition and your expected price"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
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
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
												marginRight: 6,
											}}>
											{"Item Description"}
										</Text>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"*"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFDBCF",
											borderRadius: 9999,
											paddingVertical: 4,
											paddingHorizontal: 10,
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
												color: "#FC6901",
												fontSize: 10,
												fontWeight: "bold",
												marginRight: 3,
											}}>
											{"✨"}
										</Text>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Auto-suggest"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										marginBottom: 12,
									}}>
									<View 
										style={{
											backgroundColor: "#F9F9FF",
											borderColor: "#DCE2F3",
											borderRadius: 12,
											borderWidth: 1,
											padding: 13,
											marginBottom: 8,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
											}}>
											{"MacBook Air M2 in pristine condition. \nBought 6 months ago, battery cycle count \n38 (100% capacity). Comes with original \n35W dual charger and box. No scratches or \ndents."}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											paddingVertical: 6,
											paddingHorizontal: 2,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/amdv8k1t_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 11,
													height: 11,
													marginRight: 4,
												}}
											/>
											<Text 
												style={{
													color: "#00685F",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"High buyer confidence score"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"142 / 2000"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										paddingTop: 4,
									}}>
									<View 
										style={{
											marginBottom: 6,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Quickly add highlights:"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<View 
											style={{
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 4,
												paddingHorizontal: 10,
												marginRight: 6,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"+ Original Packaging"}
											</Text>
										</View>
										<View 
											style={{
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 4,
												paddingHorizontal: 10,
												marginRight: 6,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"+ Bill Available"}
											</Text>
										</View>
										<View 
											style={{
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 4,
												paddingHorizontal: 10,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"+ Like New"}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
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
										marginBottom: 12,
									}}>
									<View 
										style={{
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Set Price*"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F9F9FF",
											borderColor: "#DCE2F3",
											borderRadius: 12,
											borderWidth: 1,
											paddingVertical: 11,
											paddingHorizontal: 16,
										}}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 24,
												fontWeight: "bold",
												marginRight: 11,
											}}>
											{"$"}
										</Text>
										<View 
											style={{
												flex: 1,
												marginRight: 22,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 32,
													fontWeight: "bold",
												}}>
												{"850"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"USD"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										marginBottom: 12,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ysyqbvvj_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 12,
												height: 9,
												marginRight: 4,
											}}
										/>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Market price intelligence for M2 256GB:"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<View 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 8,
												borderWidth: 1,
												paddingVertical: 9,
												marginRight: 6,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"$750"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Quick sell"}
											</Text>
										</View>
										<View 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#FFDBCF80",
												borderColor: "#FC6901",
												borderRadius: 8,
												borderWidth: 1,
												paddingVertical: 9,
												marginRight: 6,
											}}>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"$850"}
											</Text>
											<View 
												style={{
													alignSelf: "stretch",
													marginHorizontal: 16,
												}}>
												<Text 
													style={{
														color: "#FC6901",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"Recommended"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 8,
												borderWidth: 1,
												paddingVertical: 9,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"$920"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
												}}>
												{"Market avg"}
											</Text>
										</View>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingVertical: 9,
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
													marginRight: 6,
												}}>
												{"Negotiable Price"}
											</Text>
											<View 
												style={{
													backgroundColor: "#89F5E7",
													borderRadius: 4,
													paddingHorizontal: 6,
												}}>
												<Text 
													style={{
														color: "#00201D",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"POPULAR"}
												</Text>
											</View>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Allow prospective buyers to make offers"}
										</Text>
									</View>
									<View 
										style={{
											backgroundColor: "#FC6901",
											borderRadius: 9999,
											paddingVertical: 2,
											paddingLeft: 22,
											paddingRight: 2,
										}}>
										<View 
											style={{
												width: 20,
												height: 20,
												backgroundColor: "#FFFFFF",
												borderColor: "#FFFFFF",
												borderRadius: 9999,
												borderWidth: 1,
											}}>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wy9qx8b4_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 13,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Technical Specifications"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Optional"}
									</Text>
								</View>
								<View 
									style={{
										paddingTop: 3,
										marginBottom: 12,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 10,
										}}>
										{"Storage Capacity"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 15,
												marginRight: 8,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"128GB"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 6,
												paddingHorizontal: 14,
												marginRight: 9,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"256GB"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 15,
												marginRight: 8,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"512GB"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 15,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"1TB"}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
								<View 
									style={{
										paddingTop: 3,
										marginBottom: 12,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 10,
										}}>
										{"Unified Memory (RAM)"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<TouchableOpacity 
											style={{
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 6,
												paddingHorizontal: 14,
												marginRight: 8,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"8GB"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 15,
												marginRight: 9,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"16GB"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderColor: "#00000000",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 15,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"24GB"}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
								<View 
									style={{
										paddingTop: 7,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 10,
										}}>
										{"Warranty & Protection"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#89F5E7",
												borderColor: "#00685F",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 13,
												marginRight: 8,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/mrisp167_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 10,
													height: 13,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#00201D",
													fontSize: 12,
													fontWeight: "bold",
													marginRight: 7,
												}}>
												{"Under AppleCare"}
											</Text>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/7zug3zp2_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 12,
													height: 10,
												}}
											/>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderColor: "#E5BEB2",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 7,
												paddingHorizontal: 13,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rs00495q_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 8,
													height: 8,
													marginRight: 3,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Add Bill / Box"}
											</Text>
										</TouchableOpacity>
									</View>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									backgroundColor: "#E7EEFE",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									paddingVertical: 13,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/vtuja2qg_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 13,
										height: 16,
										marginLeft: 13,
										marginRight: 10,
									}}
								/>
								<View 
									style={{
										paddingRight: 25,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											width: 276,
										}}>
										{"Listings with accurate battery health and verified\npurchase bills receive 3.4x more verified buyer\nresponses."}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: 1,
							right: -5,
							left: -5,
							backgroundColor: "#FFFFFFF0",
							paddingTop: 1,
							paddingHorizontal: 5,
							shadowColor: "#1118270D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: -4
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingVertical: 12,
							}}>
							<TouchableOpacity 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 9999,
									borderWidth: 1,
									paddingVertical: 14,
									paddingHorizontal: 35,
									marginLeft: 16,
									marginRight: 12,
								}} onPress={()=>alert('Pressed!')}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/qtjrqmp6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 5,
										height: 9,
										marginRight: 4,
									}}
								/>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Back"}
								</Text>
							</TouchableOpacity>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF00",
									borderRadius: 9999,
									paddingVertical: 4,
									paddingHorizontal: 27,
									shadowColor: "#D0440057",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 8
									},
									shadowRadius: 20,
									elevation: 20,
								}}>
								<View 
									style={{
										paddingHorizontal: 22,
										marginRight: 7,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 14,
											fontWeight: "bold",
											textAlign: "center",
											width: 114,
										}}>
										{"Next: Location &\nReview"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tygxzd6s_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 12,
										height: 12,
									}}
								/>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}